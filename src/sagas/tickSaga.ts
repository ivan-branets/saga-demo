import { all, takeEvery, fork, cancel, delay, put } from 'redux-saga/effects';
import { TickActionTypes, tick } from '../actions/tickActions';
import { Task } from 'redux-saga';

let task: Task | null;

function* tickTask() {
  while (true) {
    yield delay(1000);
    yield put(tick());
  }
}

function* startSaga() {
  if (!task) {
    task = yield fork(tickTask)
  }
}

function* stopSaga() {
  if (task) {
    yield cancel(task);
    task = null;
  }
}

export function* watchTickSaga() {
  yield all([
    takeEvery(TickActionTypes.START, startSaga),
    takeEvery(TickActionTypes.STOP, stopSaga),
  ]);
}
