import { all } from 'redux-saga/effects';
import { watchTickSaga } from './tickSaga';
import { watchGallerySaga } from './gallerySaga';

export default function* rootSaga() {
  yield all([
    watchTickSaga(),
    watchGallerySaga()
  ]);
}
