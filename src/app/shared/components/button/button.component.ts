import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Icons } from '@shared/components/icon/icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() clickButton = new EventEmitter();

  @Input() type: ButtonTypes | undefined;
  @Input() disable: boolean = false;
  @Input() typeButton: string = 'button';
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

  get textOfOutline() {
    let className = 'w-5 h-5';

    if (this.type === 'button-outline-secondary')
      return `${className} text-secondary`;

    return className;
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

  onClick() {
    this.clickButton.emit();
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
