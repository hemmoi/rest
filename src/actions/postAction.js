import { CALL_API } from '../middleware/restApi';
export const POST_REQUEST = "POST_REQUEST";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const postData = (data) => ({
    [CALL_API]: {
        endpoint: "posts",
        method: 'post',
        types: [POST_REQUEST, POST_SUCCESS, POST_FAILURE],
        body: JSON.stringify(data)
    }
});