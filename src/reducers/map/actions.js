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
