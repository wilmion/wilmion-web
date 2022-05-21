import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { editProject } from '@core/ngrx/actions/projects.actions';

import { IInputFileData } from '@shared/components/inputs/file/file.component';

import { Project } from '@models/project.model';
import { Skill } from '@models/skill.model';
import { IAPI } from '@models/api.model';

import { petition, getValue, getFileFromUrl } from '@core/utils';

import { ApiService } from '@core/services/api/api.service';

import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss'],
})
export class ManageProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  skills$: Observable<Skill[]>;

  form: FormGroup | undefined;
  formSearch: FormGroup | undefined;

  loading: boolean = false;
  error: string = '';
  modal = false;
  typeModal: 'skills' | 'default' = 'default';
  currentProject: Project | undefined;
  files: IInputFileData[] = [];

  constructor(
    private apiService: ApiService,
    private store: Store<{ projects: Project[]; skills: Skill[] }>,
    private formBuilder: FormBuilder
  ) {
    this.projects$ = this.store.select('projects');
    this.skills$ = this.store.select('skills');
    this.buildForms();
  }

  ngOnInit(): void {}

  update(e: Event) {
    e.preventDefault();
    if (!this.currentProject) return;

    this.loading = true;

    const id: string = this.currentProject.id as any;

    const backend = this.noBackend.value ? null : this.linkBackend.value;
    const figma = this.noFigma.value ? null : this.linkFigma.value;
    const post = this.noBlog.value ? null : this.linkBlog.value;

    const skillsIds = this.currentProject.skills.map((s) => String(s.id));

    let payload: Partial<Project> = {
      name: this.name.value,
      description: this.description.value,
      linkFrontend: this.linkFrontend.value,
      linkRepository: this.linkRepository.value,
      linkBackend: backend,
      linkBlog: post,
      linkFigma: figma,
      skillsIds,
    };

    petition(
      this.apiService,
      this.files,
      switchMap((imageId: string) => {
        payload.imageId = imageId;

        return this.apiService.editProject(id, payload);
      })
    ).subscribe({
      next: (data: any) => this.onSuccess(data),
      error: () => this.onError(),
    });
  }

  activateOrDeactivateProject({ activate, id }: IACTIVATEPROJECT) {
    this.loading = true;

    if (activate) {
      this.apiService
        .activateProject(id)
        .subscribe((data) => this.onSuccess(data));
    } else {
      this.apiService
        .deactivateProject(id)
        .subscribe((data) => this.onSuccess(data));
    }
  }

  async openModal(project: Project) {
    if (!this.form) return;

    this.loading = true;

    this.currentProject = project;

    this.form.setValue({
      name: project.name,
      description: project.description,
      'link-frontend': project.linkFrontend,
      'link-repository': project.linkRepository,
      'link-backend': project.linkBackend ? project.linkBackend : '',
      'no-backend': !project.linkBackend,
      'link-figma': project.linkFigma ? project.linkFigma : '',
      'no-figma': !project.linkFigma,
      'link-blog': project.linkBlog ? project.linkBlog : '',
      'no-blog': !project.linkBlog,
    });

    const file = await getFileFromUrl(project.image.imageUrl, project.name);

    this.files = [];
    this.files.push({
      blob: file,
      imageUrl: project.image.imageUrl,
      size: project.image.size,
    });

    this.typeModal = 'default';
    this.modal = true;
    this.loading = false;
  }

  closeModal() {
    this.modal = false;
  }

  skillInProject(nameSkill: string) {
    if (!this.currentProject) return false;

    let containedSkill: Skill | undefined | boolean;

    containedSkill = this.currentProject.skills.find(
      (s) => s.name === nameSkill
    );

    if (!containedSkill) {
      const name = nameSkill.toLocaleLowerCase();
      const search = this.searchSkill.value.toLocaleLowerCase();

      containedSkill = !name.includes(search);
    }

    return containedSkill;
  }

  addSkill(skill: Skill) {
    if (!this.currentProject) return;

    this.currentProject = {
      ...this.currentProject,
      skills: [...this.currentProject.skills, skill],
    };

    this.typeModal = 'default';
  }

  deleteSkill(skill: Skill) {
    if (!this.currentProject) return;

    const newSkills = this.currentProject.skills.filter(
      (s) => s.id !== skill.id
    );

    this.currentProject = {
      ...this.currentProject,
      skills: newSkills,
    };
  }

  get searchSkill() {
    return getValue(this.formSearch, 'search-skills');
  }

  get name() {
    return getValue(this.form, 'name');
  }

  get description() {
    return getValue(this.form, 'description');
  }

  get linkFrontend() {
    return getValue(this.form, 'link-frontend');
  }

  get linkRepository() {
    return getValue(this.form, 'link-repository');
  }

  get linkBackend() {
    return getValue(this.form, 'link-backend');
  }

  get noBackend() {
    return getValue(this.form, 'no-backend');
  }

  get linkFigma() {
    return getValue(this.form, 'link-figma');
  }

  get noFigma() {
    return getValue(this.form, 'no-figma');
  }

  get linkBlog() {
    return getValue(this.form, 'link-blog');
  }

  get noBlog() {
    return getValue(this.form, 'no-blog');
  }

  private buildForms() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      'link-frontend': ['', [Validators.required]],
      'link-repository': ['', [Validators.required]],
      'link-backend': [''],
      'no-backend': [true],
      'link-figma': [''],
      'no-figma': [true],
      'link-blog': [''],
      'no-blog': [true],
    });
    this.formSearch = this.formBuilder.group({
      'search-skills': [''],
    });
  }

  private onSuccess(data: IAPI<Project>) {
    this.error = '';
    this.store.dispatch(
      editProject({
        payload: data.payload,
        id: data.payload.id as string,
      })
    );

    this.modal = false;
    this.loading = false;
  }

  private onError() {
    this.loading = false;

    this.error = 'Hubo un error al modificar tu skill';
  }
}

interface IACTIVATEPROJECT {
  readonly activate: boolean;
  readonly id: string;
}
