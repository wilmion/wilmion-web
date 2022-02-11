import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  @Input() label: string = 'Label of text area';
  @Input() placeholder: string = 'placeholder....';
  @Input() idInput: string = '';
  @Input() formGroup: FormGroup | undefined;

  transformOfCounter = {};
  counterText = '0/400';

  constructor() {}

  ngOnInit(): void {}

  onWrite(e: Event) {
    const el = e.target as HTMLTextAreaElement;

    const countWord = el.value.length;

    this.counterText = `${countWord}/400`;
  }
}
