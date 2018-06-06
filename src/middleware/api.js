import axios from 'axios';
export const HTTP_POST = 'post';
export const HTTP_GET = 'get';
export const HTTP_PUT = 'put';
export const HTTP_PATCH = 'patch';
export const HTTP_DELETE = 'delete';
export const CALL_API = 'Call API'

const API_ROOT = readHostConfiguration();
function readHostConfiguration() {
    const environment = process.env.NODE_ENV;
    if (document && document.getElementById('config')) {
        return JSON.parse(document.getElementById('config').innerHTML)[environment].host;
    }
    return 'https://jsonplaceholder.typicode.com/';
}

const callApi = (endpoint = '', method = '', data = {}, headers = {}) => {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1)
        ? API_ROOT + endpoint
        : endpoint;
    return axios[method](fullUrl, data, headers);
}

export default store => next => action => {
    const callAPI = action[CALL_API]
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let { endpoint } = callAPI;
    const {data, method, headers, types} = callAPI;

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState())
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.')
    }

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.')
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.')
    }

    const actionWith = data => {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }

    const [requestType, successType, failureType] = types;
    next(actionWith({type: requestType}))

    return callApi(endpoint, method, data, headers).then(
        response => next(actionWith({
            response, 
            type: successType
        })), 
        error => next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
    })))
}