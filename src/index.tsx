import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { configureStore, IAppState } from './store';

import './index.scss';

interface IProps {
  store: Store<IAppState>;
}

const Root: FunctionComponent<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(<Root store={store} />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
