import { Reducer } from 'redux';
import { TickActions, TickActionTypes } from '../actions/tickActions';

export interface ITicksState {
  count: number;
}

const initialState: ITicksState = {
  count: 0
}

export const ticksReducer: Reducer<ITicksState, TickActions> =
  (state = initialState, action) => {
    switch (action.type) {
      case TickActionTypes.TICK: {
        return {
          ...state,
          count: state.count + 1
        }
      }
      default: {
        return state;
      }
    }
  }
