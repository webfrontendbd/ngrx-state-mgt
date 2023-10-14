import { createAction, props } from '@ngrx/store';
import { Style } from 'src/app/_models/style';

export const LOAD_STYLE = '[Styles Page] Load Styles';
export const LOAD_STYLE_SUCCESS = '[Styles Page] Load Style Success';
export const LOAD_STYLE_FAIL = '[Styles Page] Load Style Fail';

export const loadStyle = createAction(LOAD_STYLE);

export const loadStyleSuccess = createAction(
  LOAD_STYLE_SUCCESS,
  props<{ style: Style[] }>()
);

export const loadStyleFail = createAction(
  LOAD_STYLE_FAIL,
  props<{ errorText: string }>()
);

export const addStyle = createAction('addStyle', props<{ style: Style }>());

export const updateStyle = createAction(
  'updateStyle',
  props<{ style: Style }>()
);

export const deleteStyle = createAction('deleteStyle', props<{ id: number }>());
