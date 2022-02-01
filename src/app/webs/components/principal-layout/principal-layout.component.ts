import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs';

@Component({
  selector: 'app-principal-layout',
  templateUrl: './principal-layout.component.html',
  styleUrls: ['./principal-layout.component.scss'],
})
export class PrincipalLayoutComponent implements OnInit {
  actualRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.actualRoute = this.router.url;

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.actualRoute = this.router.url;
      });
  }

  private getActualRute() {
    const routeOnlyInText = this.actualRoute.replace('/', '');

    return routeOnlyInText;
  }

  getTitleOfRute() {
    const route = this.getActualRute();

    switch (route) {
      case 'about':
        return 'SOBRE WILMION';
      case 'portfolio':
        return 'PORTAFOLIO';
      default:
        return undefined;
    }
  }
}
