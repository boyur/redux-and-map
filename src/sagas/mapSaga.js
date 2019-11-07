import { takeLatest, put, call } from 'redux-saga/effects';

import * as actions from '../reducers/map/actions';


import { mapAPI as api } from "../api";

function* getStyle() {
  try {
    const style = yield call(api.fetchStyle);

    yield put({
      type: actions.STYLE_FETCH_SUCCESS,
      payload: style
    });
  } catch (error) {
    yield put({
      type: actions.STYLE_FETCH_FAILURE,
      payload: error
    });
  }
}

function* UserSaga() {
  yield takeLatest(actions.STYLE_FETCH_REQUEST, getStyle);
}

export default UserSaga;
