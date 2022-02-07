import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biography-resume',
  templateUrl: './biography-resume.component.html',
  styleUrls: ['./biography-resume.component.scss'],
})
export class BiographyResumeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigate() {
    this.router.navigate(['/about']);
  }
}
