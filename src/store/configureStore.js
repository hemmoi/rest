import {createStore, applyMiddleware} from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
    let middleware = [thunk, apiMiddleware];
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

    return store
}

export default configureStore