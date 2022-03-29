import { Action, createReducer, on } from '@ngrx/store';

import * as JobsActions from '@actions/jobs.actions';

import { Job } from '@models/job.model';

const initialState: Job[] = [];

const _jobReducer = createReducer(
  initialState,
  on(JobsActions.addJob, addJob),
  on(JobsActions.editJob, editJob),
  on(JobsActions.setJobs, setJobs),
  on(JobsActions.clearJobs, (state) => [])
);

function editJob(state: Job[], changes: { id: string; job: Partial<Job> }) {
  const jobs = [...state];

  const jobIndex = jobs.findIndex((job) => job.id === changes.id);

  jobs[jobIndex] = {
    ...jobs[jobIndex],
    ...changes.job,
  };

  return jobs;
}

function setJobs(state: Job[], { jobs }: { jobs: Job[] }) {
  return jobs;
}

function addJob(state: Job[], newJob: Job) {
  state.push(newJob);
  return state;
}

export const jobReducer = (state: Job[] | undefined, action: Action) =>
  _jobReducer(state, action);
