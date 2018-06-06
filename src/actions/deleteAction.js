import { RSAA } from 'redux-api-middleware'; 

export const deleteData = () => ({
    [RSAA]: {
        endpoint: `https://jsonplaceholder.typicode.com/posts/1`,
        method: 'DELETE',
        types: ['DELETE_REQUEST', 'DELETE_SUCCESS', 'DELETE_FAILURE']
    }
});