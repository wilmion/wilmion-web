import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import dataNav from './mock-navigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() open: boolean = true;

  mockNavigation = dataNav;
  pathActive = 'Dashboard';

  constructor(private route: Router) {}

  ngOnInit(): void {}

  onClick(active: boolean, path: string, name: string) {
    if (!active) return;

    this.pathActive = name;

    this.route.navigate([`admin/${path}`]);
  }

  toggleMenu(pathIndex: number, sectionIndex: number) {
    const section = this.mockNavigation[sectionIndex];

    const path = section.paths[pathIndex];

    if (path.subsectionsActive === undefined) throw new Error('😑');

    section.paths[pathIndex] = {
      ...path,
      subsectionsActive: !path.subsectionsActive,
    };

    this.mockNavigation[sectionIndex] = section;
  }
}
