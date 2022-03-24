import { createAction, props } from '@ngrx/store';

import { Project } from '@models/project.model';

export const addProject = createAction('addProject', props<Project>());

export const editProject = createAction(
  'editProject',
  props<{ payload: Partial<Project>; id: string }>()
);

export const setProjects = createAction(
  'setProjects',
  props<{ projects: Project[] }>()
);

export const clearProjects = createAction('clearProjects');
