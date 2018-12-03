import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import restApi from '../middleware/restApi';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
    let middleware = [thunk, restApi];
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

    return store
}

export default configureStore