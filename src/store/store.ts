import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';

import monitorReducer from '../enhancers/monitorReducer';
import logger from '../middleware/logger';

export interface IAppState {
}

const initialState: IAppState = {
};

const middlewareEnhancer = applyMiddleware(logger);
const composedEnhancers = compose(middlewareEnhancer, monitorReducer) as StoreEnhancer;

const rootReducer = compose();

export const store = createStore(rootReducer, initialState, composedEnhancers);
