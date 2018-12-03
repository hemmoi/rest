import { CALL_API } from '../middleware/restApi';
export const PUT_REQUEST = "PUT_REQUEST";
export const PUT_SUCCESS = "PUT_SUCCESS";
export const PUT_FAILURE = "PUT_FAILURE";

export const putData = (data) => ({
    [CALL_API]: {
        endpoint: "posts/1",
        method: 'put',
        types: [PUT_REQUEST, PUT_SUCCESS, PUT_FAILURE],
        body: JSON.stringify(data)
    }
});