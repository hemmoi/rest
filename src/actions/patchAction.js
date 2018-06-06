import { RSAA } from 'redux-api-middleware';
import {API_URL} from '../helpers/hostConfiguration';
export const PATCH_REQUEST = "PATCH_REQUEST";
export const PATCH_SUCCESS = "PATCH_SUCCESS";
export const PATCH_FAILURE = "PATCH_FAILURE";

export const patchData = (data) => ({
    [RSAA]: {
        endpoint: API_URL + "posts/1",
        method: 'PATCH',
        types: [PATCH_REQUEST, PATCH_SUCCESS, PATCH_FAILURE],
        body: JSON.stringify(data)
    }
});