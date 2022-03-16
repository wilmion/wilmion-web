import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  openNav: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onToogleMenu() {
    this.openNav = !this.openNav;
  }
}
