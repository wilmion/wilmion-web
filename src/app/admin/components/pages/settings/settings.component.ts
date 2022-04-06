import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '@core/services/api/api.service';

import { setUser } from '@actions/user.actions';

import { User } from '@models/user.model';
import { IAPI } from '@models/api.model';
import { IInputFileData } from '@shared/components/inputs/file/file.component';

import { getValue } from '@core/utils/forms.util';
import { petition } from '@core/utils/api.utils';

import { switchMap } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  form: FormGroup | undefined;

  user: User | null = null;

  files: IInputFileData[] = [];

  modal: boolean = false;
  loading: boolean = false;

  basicInfo = [
    {
      titleName: 'Username',
      prefix: '@',
      edit: false,
      id: 'username',
    },
    {
      titleName: 'Name',
      prefix: '',
      edit: false,
      id: 'name',
    },
    {
      titleName: 'Job',
      prefix: '',
      edit: false,
      id: 'job',
    },
  ];

  constructor(
    private store: Store<{ user: User | null }>,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.store.select('user').subscribe((user) => {
      this.user = user;
      this.buildForm();
    });
  }

  get imageUrl() {
    if (!this.user) return '';

    if (this.files.length === 0) {
      return this.user.image.imageUrl;
    }

    return this.files[0].imageUrl;
  }

  getValueOfForm(id: string) {
    return getValue(this.form, id);
  }

  openModal() {
    this.files = [];
    this.modal = true;
  }

  setImage(files: IInputFileData[]) {
    this.files = files;

    this.updateImage();

    this.modal = false;
  }

  updateData(edit: boolean) {
    if (edit) return;

    this.loading = true;

    const payload: Partial<User> = {
      username: this.getValueOfForm('username').value,
      job: this.getValueOfForm('job').value,
      name: this.getValueOfForm('name').value,
    };

    this.apiService.updateUser(payload).subscribe({
      next: (data) => this.onSuccess(data),
      error: () => (this.loading = false),
    });
  }

  updateImage() {
    this.loading = true;

    petition(
      this.apiService,
      this.files,
      switchMap((imageId: string) => {
        return this.apiService.updateUser({
          imageId: Number(imageId),
        });
      })
    ).subscribe({
      next: (data: any) => this.onSuccess(data),
      error: () => (this.loading = false),
    });
  }

  private buildForm() {
    if (this.user) {
      this.form = this.formBuilder.group({
        username: [this.user.username, [Validators.min(4)]],
        job: [this.user.job, [Validators.min(4)]],
        name: [this.user.name, [Validators.min(4)]],
      });
    }
  }

  private onSuccess(data: IAPI<User>) {
    this.files = [];

    this.store.dispatch(setUser(data.payload));

    this.loading = false;
  }
}
