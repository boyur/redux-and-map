import { combineReducers } from 'redux';

import mapReducer from './map/reducer';
import uiReducer from './ui/reducer';

export default combineReducers({
  map: mapReducer,
  ui: uiReducer
});
