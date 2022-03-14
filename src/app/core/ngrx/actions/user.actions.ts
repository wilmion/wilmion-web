import { createAction, props } from '@ngrx/store';

import { User } from '@models/user.model';

export const setUser = createAction('setUser', props<User>());
export const logOut = createAction('logOut');
