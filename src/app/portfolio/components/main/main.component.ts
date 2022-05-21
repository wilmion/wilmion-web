import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { Store } from '@ngrx/store';

import { Skill } from '@models/skill.model';
import { Project } from '@models/project.model';
import { Job } from '@models/job.model';

import { ApiService } from '@core/services/api/api.service';

import { Observable } from 'rxjs';

import { VerbsButton, getVerbsFromButton } from '@core/utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [AsyncPipe],
})
export class MainComponent implements OnInit {
  //Observers
  skills$: Observable<Skill[]>;
  projects$: Observable<Project[]>;
  jobs$: Observable<Job[]>;

  currentProjectView: Project | undefined;

  openModal: boolean = false;
  constructor(
    private apiService: ApiService,
    private store: Store<{ skills: Skill[]; projects: Project[]; jobs: Job[] }>,
    protected pipeAsync: AsyncPipe
  ) {
    this.skills$ = store.select('skills');
    this.projects$ = store.select('projects');
    this.jobs$ = store.select('jobs');
  }

  get buttons(): VerbsButton[] {
    if (!this.currentProjectView) return [];

    const skills = this.currentProjectView.skills;

    const returneredSkill: VerbsButton[] = [];

    skills.forEach((skill) => {
      const verbButton = getVerbsFromButton(skill);

      if (verbButton) returneredSkill.push(verbButton);
    });

    return returneredSkill;
  }

  ngOnInit(): void {
    this.apiService.createStat({ type: 'VTTPP' }).subscribe(() => {});
  }

  setValueInModal(value: boolean) {
    this.openModal = value;
  }

  onViewDetails(project: Project) {
    this.currentProjectView = project;

    this.setValueInModal(true);
  }

  getLinkOfButton(text: 'Ver' | 'Ver backend' | 'Ver figma') {
    if (!this.currentProjectView) return '';

    switch (text) {
      case 'Ver':
        return this.currentProjectView.linkFrontend;
      case 'Ver backend':
        return this.currentProjectView.linkBackend;
      case 'Ver figma':
        return this.currentProjectView.linkFigma;
      default:
        return 'NOT EXIST';
    }
  }
}
