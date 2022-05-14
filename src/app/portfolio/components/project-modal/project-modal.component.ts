import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent implements OnInit {
  @Input() url: string = '';
  @Input() githubUrl: string = '';
  @Input() blogUrl: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  get urlCssRule() {
    return `url("${this.url}")`;
  }
}
