import * as actions from './actions';

const initialState = {
  isShowMap: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_IS_SHOW_MAP: {
      return ({
        ...state,
        isShowMap: !state.isShowMap
      });
    }
    default:
      return state;
  }
};
