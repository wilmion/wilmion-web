import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ApiService } from '@core/services/api/api.service';

import { getValue } from '@core/utils';

@Component({
  selector: 'app-form-box',
  templateUrl: './form-box.component.html',
  styleUrls: ['./form-box.component.scss'],
})
export class FormBoxComponent implements OnInit {
  @Input() email: string = '';
  form: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.apiService
      .createStat({
        type: 'NOCWSTF',
      })
      .subscribe(() => {});

    const link = document.createElement('a');
    link.href = `mailto:${this.email}?subject=${this.subject.value}&body=${this.message.value}`;
    link.click();
  }

  get subject() {
    return getValue(this.form, 'subject');
  }

  get message() {
    return getValue(this.form, 'message');
  }

  private buildForm() {
    this.form = this.formBuilder.group(
      {
        subject: new FormControl('', [Validators.required]),
        message: new FormControl('', [
          Validators.required,
          Validators.maxLength(400),
        ]),
      },
      { updateOn: 'change' }
    );
  }
}
