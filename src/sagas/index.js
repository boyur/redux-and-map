import { all, fork } from 'redux-saga/effects';

import MapSaga from './mapSaga';

const sagas = [
  MapSaga
];

function* Sagas() {
  yield all(sagas.map(saga => fork(saga)));
}

export default Sagas;
