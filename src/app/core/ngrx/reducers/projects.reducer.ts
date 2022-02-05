import { Action, createReducer, on } from '@ngrx/store';

import * as ProjectsAction from '@actions/projects.actions';

import { Project } from '@models/project.model';

const initialState: Project[] = [];

const _projectsReducer = createReducer(
  initialState,
  on(ProjectsAction.addProject, addProject),
  on(ProjectsAction.setProjects, setProjects),
  on(ProjectsAction.clearProjects, (state) => [])
);

function setProjects(state: Project[], { projects }: { projects: Project[] }) {
  return projects;
}

function addProject(state: Project[], newProject: Project) {
  state.push(newProject);

  return state;
}

export const projectsReducer = (
  state: Project[] | undefined,
  actions: Action
) => _projectsReducer(state, actions);
