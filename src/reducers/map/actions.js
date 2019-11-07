/**
 * Изменение viewport
 */
export const VIEWPORT_CHANGED = '@@map/VIEWPORT_CHANGED';

export const onViewportChange = (viewport) => ({
  type: VIEWPORT_CHANGED,
  payload: viewport
});


/**
 * Устанваливаем состояние загрузки карты
 */
export const LOADED = '@@map/LOADED';

export const onLoadMap = () => ({
  type: LOADED
});

export const STYLE_FETCH_REQUEST = '@@map/STYLE_FETCH_REQUEST';
export const STYLE_FETCH_SUCCESS = '@@map/STYLE_FETCH_SUCCESS';
export const STYLE_FETCH_FAILURE = '@@map/STYLE_FETCH_FAILURE';

export const getStyle = () => ({
  type: STYLE_FETCH_REQUEST
});
