import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Project } from '@models/project.model';

@Component({
  selector: 'app-card-manage-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsCardManageComponent implements OnInit {
  @Input() project: Project | undefined;

  @Output() clickCard = new EventEmitter<Project>();
  @Output() actOrDeact = new EventEmitter<{ activate: boolean; id: string }>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    if (!this.project) return;

    this.clickCard.emit(this.project);
  }

  onClickIcon() {
    if (!this.project) return;

    const activate = !this.project.active;

    this.actOrDeact.emit({
      activate,
      id: this.project.id as any,
    });
  }
}
