import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  @ViewChild('container') child: ElementRef | undefined;
  @ViewChild('counter') counter: ElementRef | undefined;

  @Input() label: string = 'Label of text area';
  @Input() placeholder: string = 'placeholder....';
  @Input() id: string = '';
  @Input() formGroup: FormGroup | undefined;

  transformOfCounter = {};
  counterText = '0/400';

  constructor() {}

  ngOnInit(): void {
    this.executeStyles();
  }

  getStyles() {
    if (!this.child || !this.counter) return;

    const widthBox = this.child.nativeElement.clientWidth;
    const widthCounter = this.counter.nativeElement.clientWidth;

    const xTranslate = widthBox - widthCounter - 8;

    this.transformOfCounter = `translate(${xTranslate}px, 218px)`;
  }

  onWrite(e: Event) {
    if (!this.counter) return;

    const el = e.target as HTMLTextAreaElement;

    const countWord = el.value.length;

    this.counterText = `${countWord}/400`;

    this.executeStyles();
  }

  private executeStyles() {
    setTimeout(() => {
      this.getStyles();
    }, 60);
  }
}
