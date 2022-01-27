import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-toogle',
  templateUrl: './checkbox-toogle.component.html',
  styleUrls: ['./checkbox-toogle.component.scss'],
})
export class CheckboxToogleComponent implements OnInit {
  @Output() changedState = new EventEmitter<boolean>();
  active: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.active = !this.active;
    this.changedState.emit(this.active);
  }
}
