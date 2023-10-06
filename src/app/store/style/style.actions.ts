import { createAction, props } from '@ngrx/store';
import { Style } from 'src/app/_models/style';

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
