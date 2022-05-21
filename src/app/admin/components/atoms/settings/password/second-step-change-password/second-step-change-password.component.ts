import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { getValue } from '@core/utils';

@Component({
  selector: 'app-second-step-change-password',
  templateUrl: './second-step-change-password.component.html',
  styleUrls: ['./second-step-change-password.component.scss'],
})
export class SecondStepChangePasswordComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<string>();

  form: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  submit() {
    this.onSubmit.emit(this.password);
  }

  get password() {
    return getValue(this.form, 'password').value;
  }

  get confirmPassword() {
    return getValue(this.form, 'confirmPassword').value;
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
