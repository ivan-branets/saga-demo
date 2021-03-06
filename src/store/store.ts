import { applyMiddleware, compose, createStore, StoreEnhancer, combineReducers, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import monitorReducer from '../enhancers/monitorReducer';
import logger from '../middleware/logger';
import { ITicksState, ticksReducer } from '../reducers/ticks';
import rootSaga from '../sagas/rootSaga';
import { IGalleryState, galleryReducer } from '../reducers/gallery';

export interface IAppState {
  ticks: ITicksState,
  gallery: IGalleryState
}

const rootReducer = combineReducers<IAppState>({
  ticks: ticksReducer,
  gallery: galleryReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(logger, sagaMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducer) as StoreEnhancer;

export function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, composedEnhancers);
  sagaMiddleware.run(rootSaga);

  return store;
}
