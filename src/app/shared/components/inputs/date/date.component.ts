import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { getValue } from '@core/utils/forms.util';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  @ViewChild('inputdecoration') input: ElementRef | undefined;

  @Input() withoutShortCuts: boolean = false;
  @Input() formGroup: FormGroup | undefined;
  @Input() ids: string[] = [];
  @Input() label: string = '';

  openSelect: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  get from() {
    return getValue(this.formGroup, this.ids[0]);
  }

  get to() {
    return getValue(this.formGroup, this.ids[1]);
  }

  get current() {
    return getValue(this.formGroup, 'current');
  }

  get widthSelect() {
    if (!this.input) return '500px';

    const element = this.input.nativeElement as HTMLElement;

    const width = element.clientWidth;

    return `${width}px`;
  }

  get marginSelect() {
    if (!this.input) return '12px';

    const element = this.input.nativeElement as HTMLElement;

    const heigth = element.clientHeight;

    const margin = heigth + 12 + 20 + 4;

    return `${margin}px`;
  }

  onClick(e: Event) {
    this.openSelect = !this.openSelect;
  }
}
