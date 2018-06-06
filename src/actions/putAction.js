import { RSAA } from 'redux-api-middleware';
import {API_URL} from '../helpers/hostConfiguration';
export const PUT_REQUEST = "PUT_REQUEST";
export const PUT_SUCCESS = "PUT_SUCCESS";
export const PUT_FAILURE = "PUT_FAILURE";

export const putData = (data) => ({
    [RSAA]: {
        endpoint: API_URL + "posts/1",
        method: 'PUT',
        types: [PUT_REQUEST, PUT_SUCCESS, PUT_FAILURE],
        body: JSON.stringify(data)
    }
});