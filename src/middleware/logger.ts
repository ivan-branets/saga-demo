// tslint:disable: no-console

import { Action, Middleware, MiddlewareAPI } from 'redux';
import { IAppState } from '../store/store';

const logger: Middleware =
  (store: MiddlewareAPI) =>
    (next: (action: any) =>
      IAppState) =>
      (action: Action) => {
        console.group(action.type);
        console.info('dispatching', action);

        const result = next(action);

        console.log('next state', store.getState());
        console.groupEnd();
        return result;
      };

export default logger;
