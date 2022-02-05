import { Action, createReducer, on } from '@ngrx/store';

import * as SocialMediaActions from '@actions/socialMedias.actions';

import { SocialMedia } from '@models/socialMedia.model';

const initialState: SocialMedia[] = [];

const _socialMediasReducer = createReducer(
  initialState,
  on(SocialMediaActions.addSocialMedia, addSocialMedia),
  on(SocialMediaActions.setSocialMedias, setSocialMedia),
  on(SocialMediaActions.clearSocialMedia, (state) => [])
);

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
