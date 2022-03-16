import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
})
export class HeaderNavigationComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.toggleMenu.emit();
  }
}
