import * as actions from './actions';

const initialState = {
  isShowMap: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_IS_SHOW_MAP: {
      const viewport = action.payload;

      return ({
        ...state,
        isShowMap: !state.isShowMap
      });
    }
    default:
      return state;
  }
};
