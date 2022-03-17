import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, NavigationEnd } from '@angular/router';

import { User } from '@models/user.model';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent implements OnInit {
  user: User | null = null;

  path: string[] = [];

  constructor(private store: Store<{ user: User }>, private route: Router) {}

  ngOnInit(): void {
    this.store.select('user').subscribe((user) => (this.user = user));
    this.route.events.subscribe((event: any) => {
      const url = event['url'] as string;

      const path = url.split('/');

      path.splice(0, 1);

      this.path = path;
    });
  }
}
