import { createAction, props } from '@ngrx/store';

import { Skill } from '@models/skill.model';

export const addSkill = createAction('addSkill', props<Skill>());

export const setSkills = createAction(
  'setSkills',
  props<{ skills: Skill[] }>()
);

export const clearAllSkills = createAction('clearAllSkills');
