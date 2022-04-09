import { createAction, props } from '@ngrx/store';
import { StaticPage } from '@models/static-page.model';

export const addStaticPage = createAction('addStaticPage', props<StaticPage>());

export const editStaticPage = createAction(
  'editStaticPage',
  props<{ id: string; changes: Partial<StaticPage> }>()
);

export const setStaticPages = createAction(
  'setStaticPages',
  props<{ staticPages: StaticPage[] }>()
);
