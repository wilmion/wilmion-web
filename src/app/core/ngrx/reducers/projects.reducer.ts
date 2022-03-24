import { Action, createReducer, on } from '@ngrx/store';

import * as ProjectsAction from '@actions/projects.actions';

import { Project } from '@models/project.model';

const initialState: Project[] = [];

const _projectsReducer = createReducer(
  initialState,
  on(ProjectsAction.addProject, addProject),
  on(ProjectsAction.editProject, editProject),
  on(ProjectsAction.setProjects, setProjects),
  on(ProjectsAction.clearProjects, (state) => [])
);

function setProjects(state: Project[], { projects }: { projects: Project[] }) {
  return projects;
}

function editProject(
  state: Project[],
  changes: { payload: Partial<Project>; id: string }
) {
  const newState = [...state];

  const index = newState.findIndex((p) => p.id === changes.id);

  newState[index] = {
    ...newState[index],
    ...changes.payload,
  };

  return newState;
}

function addProject(state: Project[], newProject: Project) {
  state.push(newProject);

  return state;
}

export const projectsReducer = (
  state: Project[] | undefined,
  actions: Action
) => _projectsReducer(state, actions);
