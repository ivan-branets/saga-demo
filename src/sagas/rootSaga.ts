import { all } from 'redux-saga/effects';
import { watchTickSaga } from './tickSaga';

export default function* rootSaga() {
  yield all([
    watchTickSaga()
  ]);
}