import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, NavigationEnd } from '@angular/router';

import { User } from '@models/user.model';

const posiblePaths = ['Stats', 'Manage', 'Contact', 'Blog', 'Settings'];
const managePosbilePaths = ['social-media', 'skills', 'projects', 'jobs'];

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent implements OnInit {
  user: User | null = null;

  path: string[] = [];

  constructor(private store: Store<{ user: User }>, private route: Router) {
    const url = this.route.url;

    this.convertRute(url);
  }

  ngOnInit(): void {
    this.store.select('user').subscribe((user) => (this.user = user));

    this.route.events.subscribe((event: any) => {
      let url = event['url'] as string;

      this.convertRute(url);
    });
  }

  convertRute(url: string | undefined) {
    if (!url) return;

    url = url.replace('/admin', '');

    const path = ['Dashboard'];

    path.push(...url.split('/'));

    path.splice(1, 1);

    this.path = path;
  }
}
