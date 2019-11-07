import * as actions from './actions';

const initialState = {
  viewport: {
    latitude: 37.78,
    longitude: -122.41,
    zoom: 11
  },
  isLoad: false,
  style: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.VIEWPORT_CHANGED: {
      const viewport = action.payload;

      return ({
        ...state,
        viewport
      });
    }
    case actions.LOADED: {
      return ({
        ...state,
        isLoad: true
      });
    }
    case actions.STYLE_FETCH_SUCCESS: {
      const style = action.payload;

      return ({
        ...state,
        style
      });
    }
    default:
      return state;
  }
};
