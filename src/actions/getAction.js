import { CALL_API } from '../middleware/restApi';
export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE"; 

export const getData = () => ({
    [CALL_API]: {
        endpoint: "posts",
        method: 'get',
        types: [GET_REQUEST, GET_SUCCESS, GET_FAILURE]
    }
});

export const getDataFail = () => ({
    [CALL_API]: {
        endpoint: "foo",
        method: 'get',
        types: [GET_REQUEST, GET_SUCCESS, GET_FAILURE]
    }
});
