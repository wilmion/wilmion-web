import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent implements OnInit {
  @Input() Obj: IStat[] = [];
  @Input() key: string = 'NU';

  activeIndex: number = -1;

  constructor() {}

  ngOnInit(): void {}

  getHeigth(value: number) {
    const inPixels = this.partialHeigth * value;

    if (inPixels < 25) return '25px';

    return `${inPixels}px`;
  }

  get max() {
    let maximum = 1;

    this.Obj.forEach((obj) => {
      if (obj.value >= maximum) maximum = obj.value;
    });

    return maximum;
  }

  get totalHeigth() {
    const el = document.getElementById(
      `line-graphic${this.key}`
    ) as HTMLElement;

    return el.clientHeight;
  }

  get partialHeigth() {
    return this.totalHeigth / this.max;
  }
}

export interface IStat {
  readonly text: string;
  readonly value: number;
}
