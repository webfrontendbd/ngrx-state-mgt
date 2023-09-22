import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Styles } from 'src/app/_models/style';

export const getStyleState = createFeatureSelector<Styles>('style');

export const getStyles = createSelector(getStyleState, (state) => {
  return state.styleList;
});

export const getStyleById = (id: number) =>
  createSelector(getStyleState, (state) => {
    return state.styleList.find((style) => style.id === id);
  });
