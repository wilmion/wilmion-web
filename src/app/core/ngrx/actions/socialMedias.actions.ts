import { createAction, props } from '@ngrx/store';

import { SocialMedia } from '@models/socialMedia.model';

export const addSocialMedia = createAction(
  'addSocialMedia',
  props<SocialMedia>()
);

export const setSocialMedias = createAction(
  'setSocialMedias',
  props<{ socialMedias: SocialMedia[] }>()
);

export const clearSocialMedia = createAction('clearSocialMedia');
