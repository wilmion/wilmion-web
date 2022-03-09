import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '@core/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project | undefined;

  @Output() OpenModal = new EventEmitter<Project>();

  url: string = '';
  hovering: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.getUrl('0px');
    console.log(this.project);
  }

  onHover(e: Event) {
    this.hovering = !this.hovering;

    const element = e.target as HTMLElement;

    if (this.hovering) this.getUrl(`${element.clientWidth / 2}px`);
    else this.getUrl('0%');
  }

  onClickViewDetails() {
    if (!this.project) return;

    this.OpenModal.emit(this.project);
  }

  private getUrl(customLeft: string) {
    if (!this.project) return;

    const opacity = this.hovering ? '0.4' : '0';

    const image = this.project.image;

    this.url = `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), url("${image.imageUrl}") ${customLeft} 0px / 120% auto no-repeat`;
  }
}
