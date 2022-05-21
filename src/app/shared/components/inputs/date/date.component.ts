import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { getValue, elegibleDate } from '@core/utils';

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

  options = ['Last 7 days', 'Last month', 'Last Year', 'Other'];
  activeIndex: number = 3;

  openSelect: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.withoutShortCuts) this.options = [];
    else {
      this.activeIndex = 0;
      this.alterateForm(6);
    }
  }

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

  onClickOption(index: number) {
    this.activeIndex = index;

    if (index === 0) this.alterateForm(6);
    else if (index === 1) this.alterateForm(31);
    else if (index === 2) this.alterateForm(365);
  }

  onClick(e: Event) {
    this.openSelect = !this.openSelect;
  }

  private alterateForm(days: number) {
    if (!this.formGroup) return;

    const to = elegibleDate(new Date());

    let from = new Date() as any;
    from.setDate(from.getDate() - days);
    from = elegibleDate(from);

    this.formGroup.setValue({
      from,
      to,
      current: false,
    });
  }
}
