import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.scss'],
})
export class NavigationMobileComponent implements OnInit {
  @Output() close = new EventEmitter();

  @Input() open: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.close.emit();
  }
}
