import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { toogleDarkMode } from '@actions/darkMode.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() currentPage: string | undefined;
  darkMode: boolean = false;
  openMenu: boolean = false;

  constructor(private store: Store<{ darkMode: boolean }>) {}

  ngOnInit(): void {
    this.store.select('darkMode').subscribe((value) => (this.darkMode = value));
  }

  toogleDropdown() {
    this.store.dispatch(toogleDarkMode());
  }

  onClose() {
    this.openMenu = false;
  }

  onOpenMenu() {
    this.openMenu = true;
  }
}
