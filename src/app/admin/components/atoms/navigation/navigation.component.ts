import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { StorageService } from '@core/services/storage/storage.service';

import { logOut } from '@actions/user.actions';

import { User } from '@models/user.model';

import dataNav from './mock-navigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() open: boolean = true;

  mockNavigation = dataNav;

  constructor(
    private storageService: StorageService,
    private route: Router,
    private store: Store<{ user: User | null }>
  ) {}

  ngOnInit(): void {}

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

  logOut() {
    this.storageService.removeToLocalStorage('auth');
    this.storageService.removeToSessionStorage('auth');
    this.storageService.removeToLocalStorage('token');
    this.storageService.removeToSessionStorage('token');

    this.store.dispatch(logOut());

    this.route.navigate(['auth']);
  }
}
