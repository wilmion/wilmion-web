import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-container-form',
  templateUrl: './container-form.component.html',
  styleUrls: ['./container-form.component.scss'],
})
export class ContainerFormComponent implements OnInit {
  @Input() formGroup: FormGroup | undefined;
  @Input() checkboxControlName: string = '';

  constructor() {}

  ngOnInit(): void {}
}
