import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() formGroup: FormGroup | undefined;
  @Input() text: string = '';
  @Input() id: string = '';

  constructor() {}

  ngOnInit(): void {}

  get active() {
    if (!this.formGroup) throw new Error('No form group');

    const active = this.formGroup.get(this.id) as AbstractControl;

    return active.value;
  }
}
