import {CALL_API, HTTP_GET} from '../middleware/api';

export const GET_DATA = 'GET_DATA';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

export const getData = () => ({
    [CALL_API]: {
        endpoint: `post`,
        types:[GET_DATA, GET_SUCCESS, GET_FAIL],
        method: HTTP_GET
    }
});
