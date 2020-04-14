import { all } from 'redux-saga/effects';
import { watchNodeSaga } from './tickSaga';

export default function* rootSaga() {
  yield all([
    watchNodeSaga()
  ]);
}