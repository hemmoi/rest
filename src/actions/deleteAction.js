import { RSAA } from 'redux-api-middleware';
import {API_URL} from '../helpers/hostConfiguration';
export const DELETE_REQUEST = "DELETE_REQUEST";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";


export const deleteData = () => ({
    [RSAA]: {
        endpoint: API_URL + "posts/1",
        method: 'DELETE',
        types: [DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE]
    }
});