import { Component, OnInit, Input } from '@angular/core';

import { Icons } from '@shared/components/icon/icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonTypes | undefined;
  @Input() content: string = '';
  @Input() notSetPosition: boolean = false;
  @Input() Icon: Icons | undefined;
  @Input() insertedSvg: string | undefined;
  @Input() color: string | undefined;
  @Input() colorText: string = '';
  @Input() customColorOutline: boolean | undefined;

  buttonClass: string = 'button';

  constructor() {}

  ngOnInit(): void {
    if (this.type) this.buttonClass = `${this.buttonClass} ${this.type}`;
  }

  getStyle() {
    if (!this.color) return {};

    if (this.customColorOutline) {
      return {
        border: `2px solid ${this.color}`,
        color: this.colorText,
      };
    }

    return {
      'background-color': this.color,
      color: this.colorText,
    };
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
