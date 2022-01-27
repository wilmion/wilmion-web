import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonTypes | undefined;

  buttonClass: string = 'button';

  constructor() {}

  ngOnInit(): void {
    if (this.type) this.buttonClass = `${this.buttonClass} ${this.type}`;
  }
}

type ButtonTypes =
  | 'button-primary'
  | 'button-secondary'
  | 'button-terciary'
  | 'button-gray'
  | 'button-outline-primary'
  | 'button-outline-secondary'
  | 'button-outline-terciary'
  | 'button-outline-gray';
