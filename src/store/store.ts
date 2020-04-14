import { applyMiddleware, compose, createStore, StoreEnhancer, combineReducers, Store } from 'redux';

import monitorReducer from '../enhancers/monitorReducer';
import logger from '../middleware/logger';
import { ITicksState, ticksReducer } from '../reducers/ticks';

export interface IAppState {
  ticks: ITicksState
}

const middlewareEnhancer = applyMiddleware(logger);
const composedEnhancers = compose(middlewareEnhancer, monitorReducer) as StoreEnhancer;

export interface IAppState {
  ticks: ITicksState
}

const rootReducer = combineReducers<IAppState>({
  ticks: ticksReducer
});

export function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, composedEnhancers);
  return store;
}

