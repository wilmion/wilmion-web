import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Job } from '@models/job.model';
import { IInputFileData } from '@shared/components/inputs/file/file.component';

import { getFileFromUrl } from '@core/utils/image.util';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.scss'],
})
export class ManageJobsComponent implements OnInit {
  $jobs: Observable<Job[]>;

  form: FormGroup | undefined;

  files: IInputFileData[] = [];

  selectedJob: Job | undefined;
  modal: boolean = false;
  loading: boolean = false;

  constructor(
    private store: Store<{ jobs: Job[] }>,
    private formBuilder: FormBuilder
  ) {
    this.$jobs = store.select('jobs');
    4;
    this.builder();
  }

  async openModal(job: Job) {
    this.selectedJob = job;
    this.loading = true;

    this.form?.patchValue(job);

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

  ngOnInit(): void {}

  private builder() {
    this.form = this.formBuilder.group({
      nameBusinness: [''],
      color: [''],
      description: [''],
      role: [''],
      from: [new Date()],
      to: [new Date()],
      function1: [''],
      function2: [''],
      function3: [''],
      function4: [''],
      current: [true],
    });
  }
}

interface IForm {
  nameBusinness: string;
  color: string;
  description: string;
  role: string;
  from: Date;
  to: Date | 'Currently';
  function1: string;
  function2: string;
  function3: string;
  function4: string;

  current: boolean;
}

// How to create preview and will linked it?
// Validators on forms
// Create select date range.
// Create API strategy and all items of states
