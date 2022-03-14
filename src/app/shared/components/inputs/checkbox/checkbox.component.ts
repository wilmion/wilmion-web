import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() formGroup: FormGroup | undefined;
  @Input() text: string = '';
  @Input() id: string = '';

  active: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toogleActive() {
    this.active = !this.active;
  }
}
