import { Action, createReducer, on } from '@ngrx/store';

import * as UserActions from '@actions/user.actions';

import { User } from '@models/user.model';

const initialState: User | null = null;

const _userReducer = createReducer<User | null>(
  initialState,
  on(UserActions.setUser, setUser),
  on(UserActions.logOut, (state) => null)
);

function setUser(state: User | null, user: User) {
  state = user;
  return state;
}

export const userReducer = (state: User | null | undefined, action: Action) =>
  _userReducer(state, action);
