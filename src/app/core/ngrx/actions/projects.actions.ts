import { createAction, props } from '@ngrx/store';

import { Project } from '@models/project.model';

export const addProject = createAction('addProject', props<Project>());

export const setProjects = createAction(
  'setProjects',
  props<{ projects: Project[] }>()
);

export const clearProjects = createAction('clearProjects');
