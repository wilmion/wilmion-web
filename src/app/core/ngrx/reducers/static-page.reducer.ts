import { Action, createReducer, on } from '@ngrx/store';

import * as StaticPageActions from '../actions/static-page.actions';

import { StaticPage } from '@models/static-page.model';

const initialState: StaticPage[] = [
  {
    introduction:
      'En esta sección podras contarme via email o ver mi actividad en redes sociales 😎😊',
    responseQuestion: `Como +l+Frontend Developer+l+ desde el primer día garantizo la calidad de código de tus proyectos, aparte, complemento el diseño con la maquetación de la página web debido a que también soy +l+UI designer+l+.
    A nivel personal soy una persona amigable en la cual seguro sacare unas sonrisas a la cultura de tu empresa/compañía.`,
    contactEmail: 'wilmion92@gmail.com',
  },
  {
    introduction: '',
    responseQuestion: '',
    contactEmail: undefined,
  },
];

const _staticPageReducer = createReducer(
  initialState,
  on(StaticPageActions.addStaticPage, onAddStaticPageActions),
  on(StaticPageActions.setStaticPages, onSetStaticPages)
);

export const staticPageReducer = (
  state: StaticPage[] | undefined,
  action: Action
) => {
  return _staticPageReducer(state, action);
};

function onSetStaticPages(
  state: StaticPage[],
  { staticPages }: { staticPages: StaticPage[] }
) {
  return staticPages;
}

function onAddStaticPageActions(state: StaticPage[], addedInfo: StaticPage) {
  state.push(addedInfo);

  return state;
}
