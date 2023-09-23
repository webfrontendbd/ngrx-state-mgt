import { createReducer, on } from '@ngrx/store';
import * as StyleActions from './style.actions';
import { StyleState } from './style.state';

export const _styleReducer = createReducer(
  StyleState,
  on(StyleActions.loadStyle, (state) => {
    return {
      ...state,
    };
  }),
  on(StyleActions.loadStyleSuccess, (state, action) => {
    return {
      ...state,
      styleList: [...action.style],
      errorText:''
    };
  }),
  on(StyleActions.loadStyleFail, (state, action) => {
    return {
      ...state,
      styleList: [],
      errorText: action.errorText,
    };
  }),
  on(StyleActions.addStyle, (state, action) => {
    const _style = { ...action.style };
    _style.id = state.styleList.length + 1;
    return {
      ...state,
      styleList: [...state.styleList, _style],
    };
  }),
  on(StyleActions.updateStyle, (state, action) => {
    const _style = { ...action.style };
    const updateStyle = state.styleList.map((style) => {
      return _style.id === style.id ? _style : style;
    });
    return {
      ...state,
      styleList: updateStyle,
    };
  }),
  on(StyleActions.deleteStyle, (state, action) => {
    const updateStyle = state.styleList.filter((style) => {
      return style.id !== action.id;
    });
    return {
      ...state,
      employeeList: updateStyle,
    };
  })
);

export function styleReducer(state: any, action: any) {
  return _styleReducer(state, action);
}
