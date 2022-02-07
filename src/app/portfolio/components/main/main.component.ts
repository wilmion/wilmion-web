import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Skill } from '@models/skill.model';
import { Project } from '@models/project.model';
import { Job } from '@models/job.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  //Observers
  skills$: Observable<Skill[]>;
  projects$: Observable<Project[]>;
  jobs$: Observable<Job[]>;

  currentProjectView: Project | undefined;
  buttonsSkillOfProject: string[] = [];

  openModal: boolean = false;
  constructor(
    private store: Store<{ skills: Skill[]; projects: Project[]; jobs: Job[] }>
  ) {
    this.skills$ = store.select('skills');
    this.projects$ = store.select('projects');
    this.jobs$ = store.select('jobs');
  }

  ngOnInit(): void {}

  setValueInModal(value: boolean) {
    this.openModal = value;
  }

  onViewDetails(project: Project) {
    this.currentProjectView = project;

    this.buttonsSkillOfProject = [];

    project.skills.forEach((skill) => {
      if (skill === 'Angular' || skill === 'Nest.js')
        this.buttonsSkillOfProject.push(skill);
    });

    this.setValueInModal(true);
  }

  setVerbsInButtonOfModal(skill: string) {
    if (skill === 'Angular') return 'Ver';
    else if (skill === 'Nest.js') return 'Ver backend';

    return '';
  }

  getSkillFromName(skills: Skill[] | null, name: string) {
    if (!skills) throw new Error('Skills is null?');

    const skill = skills.find((s) => s.name === name);

    if (!skill)
      throw new Error("A error ocurred, This name of skills doesn't exist");

    return skill;
  }
}
