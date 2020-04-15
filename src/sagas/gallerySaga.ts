import { all, takeEvery, put, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { TickActionTypes } from '../actions/tickActions';
import { getImageUrlSuccess, getImageUrlFailure } from '../actions/galleryActions';

function getApi() {
  return axios.get('https://api.thecatapi.com/v1/images/search');
}

function* getImageUrlSaga() {
  try {
    const response: AxiosResponse = yield call(getApi);
    yield put(getImageUrlSuccess(response.data[0].url));
  } catch (error) {
    yield put(getImageUrlFailure(error));
  }
}

export function* watchGallerySaga() {
  yield all([
    takeEvery(TickActionTypes.TICK, getImageUrlSaga)
  ]);
}
