import { Action, createReducer, on } from '@ngrx/store';

import * as SocialMediaActions from '@actions/socialMedias.actions';

import { SocialMedia } from '@models/socialMedia.model';

const initialState: SocialMedia[] = [];

const _socialMediasReducer = createReducer(
  initialState,
  on(SocialMediaActions.addSocialMedia, addSocialMedia),
  on(SocialMediaActions.setSocialMedias, setSocialMedia),
  on(SocialMediaActions.editSocialMedia, editSocialMedia),
  on(SocialMediaActions.clearSocialMedia, (state) => [])
);

function editSocialMedia(
  state: SocialMedia[],
  changes: { id: string; changes: Partial<SocialMedia> }
) {
  const index = state.findIndex((s) => s.id === changes.id);

  const newState = [...state];

  const update = {
    ...state[index],
    ...changes.changes,
  };

  newState[index] = update;

  return newState;
}

function addSocialMedia(state: SocialMedia[], newSocialMedia: SocialMedia) {
  state.push(newSocialMedia);
  return state;
}

function setSocialMedia(
  state: SocialMedia[],
  { socialMedias }: { socialMedias: SocialMedia[] }
) {
  return socialMedias;
}

export const socialMediasReducer = (
  state: SocialMedia[] | undefined,
  action: Action
) => _socialMediasReducer(state, action);
