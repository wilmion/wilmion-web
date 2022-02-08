import { Action, createReducer, on } from '@ngrx/store';

import * as DarkModeActions from '@actions/darkMode.actions';

const initialState = false;

const _darkModeReducer = createReducer(
  initialState,
  on(DarkModeActions.toogleDarkMode, (state) => !state),
  on(DarkModeActions.setDarkMode, setDarkMode)
);

function setDarkMode(state: boolean, { value }: { value: boolean }) {
  return value;
}

export const darkModeReducer = (state: boolean | undefined, action: Action) =>
  _darkModeReducer(state, action);
