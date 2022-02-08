import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { toogleDarkMode } from '@actions/darkMode.actions';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.scss'],
})
export class NavigationMobileComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Input() open: boolean = false;

  darkMode: boolean = false;

  constructor(private store: Store<{ darkMode: boolean }>) {}

  ngOnInit(): void {
    this.store.select('darkMode').subscribe((value) => (this.darkMode = value));
  }

  toogleDropdown() {
    this.store.dispatch(toogleDarkMode());
  }

  onClose() {
    this.close.emit();
  }
}
