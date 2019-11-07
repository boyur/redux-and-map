import { createSelector } from 'reselect';

export const mapSelector = store => store.map;

export const viewportSelector = createSelector(
  mapSelector,
  map => map.viewport
);

export const isMapLoadSelector = createSelector(
  mapSelector,
  map => map.isLoad
);
