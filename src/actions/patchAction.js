import { RSAA } from 'redux-api-middleware'; 

export const patchData = (data) => ({
    [RSAA]: {
        endpoint: `https://jsonplaceholder.typicode.com/posts/1`,
        method: 'PATCH',
        types: ['PATCH_REQUEST', 'PATCH_SUCCESS', 'PATCH_FAILURE'],
        body: JSON.stringify(data)
    }
});