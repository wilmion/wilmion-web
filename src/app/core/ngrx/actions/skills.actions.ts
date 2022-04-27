import { createAction, props } from '@ngrx/store';

import { Skill } from '@models/skill.model';

export const addSkill = createAction('addSkill', props<Skill>());

export const deleteSkill = createAction('deleteSkill', props<{ id: number }>());

export const editSkill = createAction(
  'editSkill',
  props<{ id: string; payload: Partial<Skill> }>()
);

export const setSkills = createAction(
  'setSkills',
  props<{ skills: Skill[] }>()
);

export const clearAllSkills = createAction('clearAllSkills');
