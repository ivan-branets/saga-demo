import { Reducer } from 'react';
import { IAppState } from '../store/store';
import { Action, Store, StoreEnhancer } from 'redux';

const round = (num: number) => Math.round(num * 100) / 100;

const monitorReducerEnhancer = (createStore: (
  reducer: Reducer<IAppState, Action>,
  state: IAppState,
  enhancer: StoreEnhancer
) => Store) => (
  reducer: Reducer<IAppState, Action>,
  initialState: IAppState,
  enhancer: StoreEnhancer
) => {
    const monitoredReducer = (state: IAppState, action: Action) => {
      const start = performance.now();
      const newState = reducer(state, action);
      const end = performance.now();
      const diff = round(end - start);

      console.log('reducer process time:', diff);

      return newState;
    }

    return createStore(monitoredReducer, initialState, enhancer);
  }

export default monitorReducerEnhancer;
