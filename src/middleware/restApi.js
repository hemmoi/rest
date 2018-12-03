/*
    Based on this example, but implemented with axios instead of fetch:
    https://github.com/reduxjs/redux/blob/master/examples/real-world/src/middleware/api.js

    Example of use:
    const myPost = (data) => ({
        [CALL_API]: {
            endpoint: "/my-endpoint",
            method: 'post',
            data: data,
            types: [ACTION_REQUEST, ACTION_SUCCESS, ACTION_FAILURE]
        }
    });
*/

import axios from 'axios';
import {API_ROOT} from '../helpers/hostConfiguration';

// const API_ROOT = process.env.REACT_APP_API_URL;

export const CALL_API = 'Call API'

const callApi = (
    options = {
        url: '',
        method: '',
        data: {},
        headers: {}
    }
) => {
    if (options.method === "post" || options.method === "put") {
        return axios[options.method](options.url, options.data, options.headers);
    }
    return axios[options.method](options.url, options.headers);
}

export default store => next => action => {
    const callAPI = action[CALL_API]
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let { endpoint } = callAPI;
    const { method, types, data } = callAPI

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState())
    }

    const actionWith = data => {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }

    const [requestType, successType, failureType] = types
    next(actionWith({ type: requestType, isFetching: true, error: null }))

    const url = API_ROOT + endpoint;
    let headers = {};

    return (
        callApi({ url, method, data, headers })
            .then(response => {
                next(actionWith({
                    type: successType,
                    payload: response.data,
                    isFetching: false
                }))
                return response.data;
            })
            .catch(error => {
                next(actionWith({
                    type: failureType,
                    error: error || "Unknown error",
                    isFetching: false
                }))
                throw error;
            })
    )
}