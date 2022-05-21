import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { getPaths } from '@core/utils';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
})
export class HeaderNavigationComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter();

  path: string[] = [];

  constructor(private route: Router) {
    const url = this.route.url;

    this.path = getPaths({
      url,
    });
  }

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      this.path = getPaths(event);
    });
  }

  onClick() {
    this.toggleMenu.emit();
  }
}
