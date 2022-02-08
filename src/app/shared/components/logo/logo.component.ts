import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Input() colorClass: string = 'text-primary';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['/']);
  }
}
