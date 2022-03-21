import { Action, createReducer, on } from '@ngrx/store';

import * as SkillsActions from '@actions/skills.actions';

import { Skill } from '@models/skill.model';

const initialState: Skill[] = [];

const _skillReducer = createReducer(
  initialState,
  on(SkillsActions.addSkill, addSkill),
  on(SkillsActions.setSkills, setSkills),
  on(SkillsActions.editSkill, editSkill),
  on(SkillsActions.clearAllSkills, clearAllSkills)
);

export function skillReducer(state: Skill[] | undefined, action: Action) {
  return _skillReducer(state, action);
}

function addSkill(state: Skill[], newSkill: Skill) {
  const newState = [...state];

  newState.push(newSkill);

  return newState;
}

function editSkill(
  state: Skill[],
  changes: { id: string; payload: Partial<Skill> }
) {
  const newState = [...state];

  const index = newState.findIndex((s) => s.id === changes.payload.id);

  newState[index] = {
    ...newState[index],
    ...changes.payload,
  };

  return newState;
}

function setSkills(state: Skill[], { skills }: { skills: Skill[] }) {
  return skills;
}

function clearAllSkills(state: Skill[]) {
  return [];
}
