import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IInputFileData } from '@shared/components/inputs/file/file.component';

import { ApiService } from '@core/services/api/api.service';

import { Skill } from '@models/skill.model';
import { IAPI } from '@models/api.model';

import {
  addSkill,
  deleteSkill,
  editSkill,
} from '@core/ngrx/actions/skills.actions';

import { petition, getValue, getFileFromUrl } from '@core/utils';

import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrls: ['./manage-skills.component.scss'],
})
export class ManageSkillsComponent implements OnInit {
  $skills: Observable<Skill[]>;

  formSearch: FormGroup | undefined;
  formPrincipal: FormGroup | undefined;

  files: IInputFileData[] = [];
  idCurrentSkill: string = '';

  openModal: boolean = false;
  createModal: boolean = true;

  loading: boolean = false;
  error: boolean = false;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private store: Store<{ skills: Skill[] }>
  ) {
    this.$skills = store.select('skills');
    this.createForms();
  }

  ngOnInit(): void {}

  onButtonCreate() {
    if (!this.formPrincipal) throw new Error('No form findered');

    this.openModal = true;
    this.createModal = true;
    this.files = [];

    this.formPrincipal.reset();
  }

  async onButtonEdit(skill: Skill) {
    this.loading = true;

    if (!this.formPrincipal) throw new Error('No form findered');

    this.formPrincipal.setValue({
      'svg-principal-form': skill.icon ? skill.icon : '',
      'name-principal-form': skill.name,
      'bg-principal-form': skill.backgroundColor,
      'color-principal-form': skill.iconColor,
    });

    this.idCurrentSkill = skill.id as any;

    if (skill.image) {
      const file = await getFileFromUrl(skill.image.imageUrl, skill.name);

      this.files = [];
      this.files.push({
        imageUrl: skill.image.imageUrl,
        blob: file,
        size: skill.image.size,
      });
    }

    this.openModal = true;
    this.createModal = false;

    this.loading = false;
  }

  create() {
    this.loading = true;

    if (this.files.length > 0) {
      this.petition(
        switchMap((imageId: string) => {
          const newSkill = this.createSkillPayload(false, imageId);

          return this.apiService.createSkill(newSkill);
        }),
        true
      );
    } else {
      const newSkill = this.createSkillPayload(false);

      this.apiService.createSkill(newSkill).subscribe({
        next: (data) => this.onCreateSkill(data),
        error: () => this.onError(),
      });
    }
  }

  edit() {
    this.loading = true;

    if (this.files.length > 0) {
      this.petition(
        switchMap((imageId: string) => {
          const newSkill = this.createSkillPayload(false, imageId);

          return this.apiService.editSkill(this.idCurrentSkill, newSkill);
        }),
        false
      );
    } else {
      const newSkill = this.createSkillPayload(false);

      this.apiService.editSkill(this.idCurrentSkill, newSkill).subscribe({
        next: (data) => this.onEditSkill(data),
        error: () => this.onError(),
      });
    }
  }

  delete() {
    this.loading = true;
    this.openModal = false;

    const id = this.idCurrentSkill;

    this.apiService.deleteSkill(id).subscribe({
      next: () => this.onDeleteSkill(id as any),
      error: () => this.onError(),
    });
  }

  get svg() {
    return getValue(this.formPrincipal, 'svg-principal-form');
  }

  get name() {
    return getValue(this.formPrincipal, 'name-principal-form');
  }

  get background() {
    return getValue(this.formPrincipal, 'bg-principal-form');
  }

  get color() {
    return getValue(this.formPrincipal, 'color-principal-form');
  }

  get provisionalSkill() {
    const skill = this.createSkillPayload();

    return skill;
  }

  private createForms() {
    this.formSearch = this.formBuilder.group({
      search: [''],
    });
    this.formPrincipal = this.formBuilder.group({
      'svg-principal-form': [''],
      'name-principal-form': [
        '',
        [Validators.required, Validators.minLength(3)],
      ],
      'bg-principal-form': [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
      'color-principal-form': [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }

  private createSkillPayload(preview: boolean = true, imageId?: string) {
    let skill: Skill = {
      name: this.name.value,
      backgroundColor: this.background.value,
      iconColor: this.color.value,
    };

    if (this.svg.value !== '') {
      skill.icon = this.svg.value;
    } else if (this.files.length > 0) {
      if (preview) {
        skill.image = {
          imageUrl: this.files[0].imageUrl,
          size: this.files[0].size,
          resolution: '1.0',
          md5: '',
        };
      } else if (imageId) {
        skill.imageId = imageId;
      }
    }

    return skill;
  }

  private petition(switchMap: any, create: boolean) {
    return petition(this.apiService, this.files, switchMap).subscribe({
      next: (data: any) =>
        create ? this.onCreateSkill(data) : this.onEditSkill(data),
      error: () => this.onError(),
    });
  }

  private onDeleteSkill(id: number) {
    this.store.dispatch(deleteSkill({ id }));

    this.loading = false;
    this.error = false;
  }

  private onCreateSkill(data: IAPI<Skill>) {
    this.loading = false;
    this.error = false;

    this.openModal = false;

    this.store.dispatch(addSkill(data.payload));
  }

  private onEditSkill(data: IAPI<Skill>) {
    this.loading = false;
    this.error = false;

    this.store.dispatch(
      editSkill({ id: this.idCurrentSkill, payload: data.payload })
    );

    this.openModal = false;
  }

  private onError() {
    this.error = true;
    this.loading = false;
  }
}
