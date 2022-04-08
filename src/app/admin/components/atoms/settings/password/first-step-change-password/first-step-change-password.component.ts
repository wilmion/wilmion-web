import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { getValue } from '@core/utils/forms.util';

@Component({
  selector: 'app-first-step-change-password',
  templateUrl: './first-step-change-password.component.html',
  styleUrls: ['./first-step-change-password.component.scss'],
})
export class FirstStepChangePasswordComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<{
    oldPassword: string;
    newPassword: string;
  }>();

  form: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.builder();
  }

  ngOnInit(): void {}

  submit() {
    this.onSubmit.emit({
      oldPassword: this.oldPassword.value,
      newPassword: this.oldPassword.value,
    });
  }

  get oldPassword() {
    return getValue(this.form, 'oldPassword');
  }

  private builder() {
    this.form = this.formBuilder.group({
      oldPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
