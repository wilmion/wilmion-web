import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { getValue } from '@core/utils/forms.util';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  @Input() label: string = 'Label of text area';
  @Input() placeholder: string = 'placeholder....';
  @Input() idInput: string = '';
  @Input() limitCharacters: number = 400;
  @Input() formGroup: FormGroup | undefined;

  constructor() {}

  ngOnInit(): void {}

  get counterText() {
    const value = getValue(this.formGroup, this.idInput).value;

    const countWord = value.length;

    return `${countWord}/${this.limitCharacters}`;
  }
}
