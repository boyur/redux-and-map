import { createSelector } from 'reselect';

export const uiSelector = store => store.ui;

export const isShowMapSelector = createSelector(
  uiSelector,
  map => map.isShowMap
);
