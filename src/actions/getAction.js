import { RSAA } from 'redux-api-middleware';
import {API_URL} from '../helpers/hostConfiguration';
export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE"; 

export const getData = () => ({
    [RSAA]: {
        endpoint: API_URL + "posts",
        method: 'GET',
        types: [GET_REQUEST, GET_SUCCESS, GET_FAILURE]
    }
});

export const getDataFail = () => ({
    [RSAA]: {
        endpoint: API_URL + "foo",
        method: 'GET',
        types: [GET_REQUEST, GET_SUCCESS, GET_FAILURE]
    }
});
