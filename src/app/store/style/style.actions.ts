import { createAction, props } from '@ngrx/store';
import { Style } from 'src/app/_models/style';

<<<<<<< HEAD
export const LOAD_STYLE = '[Style Page] Load Styles';
export const LOAD_STYLE_SUCCESS = '[Style Page] Load Style Success';
export const ADD_STYLE = '[Style Page] Add Style';
export const UPDATE_STYLE = '[Style Page] Update Style';
export const DEL_STYLE = '[Style Page] Delete Style';

export const loadStyle = createAction(LOAD_STYLE);
export const loadStyleSuccess = createAction(LOAD_STYLE_SUCCESS, props<{ style: Style[] }>());
export const addStyle = createAction(ADD_STYLE, props<{ style: Style }>());
export const updateStyle = createAction(UPDATE_STYLE, props<{ style: Style }>());
export const deleteStyle = createAction(DEL_STYLE, props<{ id: number }>());
=======
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
>>>>>>> 04b0bb090b830084aea05cc628cf55a91bcbae7f
