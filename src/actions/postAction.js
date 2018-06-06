import { RSAA } from 'redux-api-middleware';
import {API_URL} from '../helpers/hostConfiguration';
export const POST_REQUEST = "POST_REQUEST";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const postData = (data) => ({
    [RSAA]: {
        endpoint: API_URL + "posts",
        method: 'POST',
        types: [POST_REQUEST, POST_SUCCESS, POST_FAILURE],
        body: JSON.stringify(data)
    }
});