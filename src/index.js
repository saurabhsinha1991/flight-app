import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

import flightApp from './reducers';

const middleware = applyMiddleware(thunk);
const store = createStore(flightApp, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
