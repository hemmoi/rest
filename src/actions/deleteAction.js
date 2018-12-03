import { CALL_API } from '../middleware/restApi';
export const DELETE_REQUEST = "DELETE_REQUEST";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";


export const deleteData = () => ({
    [CALL_API]: {
        endpoint: "posts/1",
        method: 'delete',
        types: [DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE]
    }
});