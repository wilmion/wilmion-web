import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { Store } from '@ngrx/store';

import { Skill } from '@models/skill.model';
import { Project } from '@models/project.model';
import { Job } from '@models/job.model';

import { Observable } from 'rxjs';

import {
  VerbsButton,
  getVerbsFromButton,
} from '@core/utils/getVerbsFromButton.util';

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
  buttonsSkillCurrentProject: VerbsButton[] = [];

  openModal: boolean = false;
  constructor(
    private store: Store<{ skills: Skill[]; projects: Project[]; jobs: Job[] }>,
    protected pipeAsync: AsyncPipe
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
    this.buttonsSkillCurrentProject = [];

    const skills = this.pipeAsync.transform(this.skills$);

    if (!skills) return;

    const skillsNames = project.skills;

    skillsNames.forEach((skillName) => {
      const verbButton = getVerbsFromButton(skillName, skills);

      if (verbButton) this.buttonsSkillCurrentProject.push(verbButton);
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
