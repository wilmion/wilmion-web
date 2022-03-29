import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { editJob } from '@actions/jobs.actions';

import { ApiService } from '@core/services/api/api.service';

import { Job } from '@models/job.model';
import { IAPI } from '@models/api.model';
import { IInputFileData } from '@shared/components/inputs/file/file.component';

import { getFileFromUrl } from '@core/utils/image.util';
import { getValue } from '@core/utils/forms.util';
import { petition } from '@core/utils/api.utils';

import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.scss'],
})
export class ManageJobsComponent implements OnInit {
  $jobs: Observable<Job[]>;

  form: FormGroup | undefined;

  files: IInputFileData[] = [];

  jobSelected: Job | undefined;
  modal: boolean = false;
  loading: boolean = false;
  error: string = '';

  constructor(
    private apiService: ApiService,
    private store: Store<{ jobs: Job[] }>,
    private formBuilder: FormBuilder
  ) {
    this.$jobs = store.select('jobs');
    4;
    this.builder();
  }

  ngOnInit(): void {}

  submit(e: Event) {
    e.preventDefault();

    this.loading = true;

    const payload = this.payloadJob();

    const id = this.jobSelected?.id as any as string;

    if (!payload) {
      this.loading = false;
      this.error = 'Completa los campos';
      return;
    }

    petition(
      this.apiService,
      this.files,
      switchMap((imageId: string) => {
        const dtoUpdate: Partial<Job> = {
          ...payload,
          imageId,
        };

        return this.apiService.updateJob(id, dtoUpdate);
      })
    ).subscribe({
      next: (data: any) => this.onSuccess(data),
      error: () => this.onError(),
    });
  }

  toggleJob(params: { id: string; activate: boolean }) {
    if (params.activate) {
      return this.activateJob(params.id);
    } else {
      return this.deactivateJob(params.id);
    }
  }

  async openModal(job: Job) {
    this.jobSelected = job;
    this.loading = true;

    this.form?.patchValue({
      ...job,
      current: job.to === 'Currently',
    });

    const file = await getFileFromUrl(job.image.imageUrl, job.image.size);

    this.files = [];
    this.files.push({
      blob: file,
      imageUrl: job.image.imageUrl,
      size: job.image.size,
    });

    this.loading = false;
    this.modal = true;
  }

  get previewJob() {
    const payload = this.payloadJob();

    if (!payload) return undefined;

    const job: Job = {
      image: {
        imageUrl: this.files[0].imageUrl,
        size: '400x400',
        md5: '',
        resolution: '',
      },
      ...payload,
    };

    return job;
  }

  private builder() {
    this.form = this.formBuilder.group({
      nameBusinness: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      role: ['', [Validators.required, Validators.minLength(6)]],
      from: ['', [Validators.required]],
      to: [''],
      function1: ['', [Validators.maxLength(80)]],
      function2: ['', [Validators.maxLength(80)]],
      function3: ['', [Validators.maxLength(80)]],
      function4: ['', [Validators.maxLength(80)]],
      current: [true],
    });
  }

  private formValue(key: IForm) {
    return getValue(this.form, key);
  }

  private payloadJob() {
    if (!this.jobSelected || this.files.length === 0) return undefined;

    const function1 = this.formValue('function1').value;
    const function2 = this.formValue('function2').value;
    const function3 = this.formValue('function3').value;
    const function4 = this.formValue('function4').value;

    return {
      nameBusinness: this.formValue('nameBusinness').value,
      color: this.jobSelected.color,
      description: this.formValue('description').value,
      active: this.jobSelected.active,
      role: this.formValue('role').value,
      from: this.formValue('from').value,
      to: this.formValue('current').value
        ? 'Currently'
        : this.formValue('to').value,
      function1: function1 === '' ? null : function1,
      function2: function2 === '' ? null : function2,
      function3: function3 === '' ? null : function3,
      function4: function4 === '' ? null : function4,
    };
  }

  private activateJob(id: string) {
    this.loading = true;

    this.apiService.activateJob(id).subscribe({
      next: (data) => this.onSuccess(data),
      error: () => this.onError(),
    });
  }

  private deactivateJob(id: string) {
    this.loading = false;

    this.apiService.deactivateJob(id).subscribe({
      next: (data) => this.onSuccess(data),
      error: () => this.onError(),
    });
  }

  private onSuccess(data: IAPI<Job>) {
    this.store.dispatch(
      editJob({
        id: data.payload.id as string,
        job: data.payload,
      })
    );

    this.modal = false;
    this.error = '';
    this.loading = false;
  }

  private onError() {
    this.loading = false;
    this.error = 'A error ocurred when you update the job target';
  }
}

type IForm =
  | 'nameBusinness'
  | 'description'
  | 'role'
  | 'from'
  | 'to'
  | 'function1'
  | 'function2'
  | 'function3'
  | 'function4'
  | 'current';
