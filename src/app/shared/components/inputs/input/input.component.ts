import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Icons } from '@shared/components/icon/icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string = 'Label text';
  @Input() placeholder: string = 'placeholder';
  @Input() type: string = '';
  @Input() idInput: string = '';
  @Input() formGroup: FormGroup | undefined;
  @Input() withIcon: boolean = false;
  @Input() icon: Icons | undefined;

  constructor() {}

  ngOnInit(): void {}
}
