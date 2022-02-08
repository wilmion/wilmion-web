import { createAction, props } from '@ngrx/store';

export const toogleDarkMode = createAction('toogleDarkMode');
export const setDarkMode = createAction(
  'setDarkMode',
  props<{ value: boolean }>()
);
