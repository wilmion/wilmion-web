import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() currentPage: string | undefined;

  openMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.openMenu = false;
  }

  onOpenMenu() {
    this.openMenu = true;
  }
}
