import { CALL_API } from '../middleware/restApi';
export const PATCH_REQUEST = "PATCH_REQUEST";
export const PATCH_SUCCESS = "PATCH_SUCCESS";
export const PATCH_FAILURE = "PATCH_FAILURE";

export const patchData = (data) => ({
    [CALL_API]: {
        endpoint: "posts/1",
        method: 'patch',
        types: [PATCH_REQUEST, PATCH_SUCCESS, PATCH_FAILURE],
        body: JSON.stringify(data)
    }
});