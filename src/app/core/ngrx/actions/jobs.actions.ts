import { createAction, props } from '@ngrx/store';
import { Job } from '@models/job.model';

export const addJob = createAction('addJob', props<Job>());

export const editJob = createAction(
  'editJob',
  props<{ id: string; job: Partial<Job> }>()
);

export const setJobs = createAction('setJobs', props<{ jobs: Job[] }>());

export const clearJobs = createAction('clearJobs');
