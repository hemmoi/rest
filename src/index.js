import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
