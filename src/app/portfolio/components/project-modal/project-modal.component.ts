import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent implements OnInit {
  @Input() url: string = '';
  imageUrl: string = '';

  constructor() {}

  ngOnInit(): void {
    this.transformUrlToCssRule();
  }

  private transformUrlToCssRule() {
    const newUrl = `url("${this.url}")`;

    this.imageUrl = newUrl;
  }
}
