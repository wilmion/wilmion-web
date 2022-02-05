import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-box',
  templateUrl: './form-box.component.html',
  styleUrls: ['./form-box.component.scss'],
})
export class FormBoxComponent implements OnInit {
  form: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    if (!this.form) return;
  }

  onSubmit() {
    const link = document.createElement('a');
    link.href = `mailto:wilmion92@gmail.com?subject=${this.subject}&body=${this.message}`;
    link.click();
  }

  get subject() {
    if (!this.form) return '';

    return this.form.get('subject')?.value;
  }

  get message() {
    if (!this.form) return '';

    return this.form.get('message')?.value;
  }

  private buildForm() {
    this.form = this.formBuilder.group(
      {
        subject: new FormControl('', {}),
        message: new FormControl('', {}),
      },
      { updateOn: 'change' }
    );
  }
}
