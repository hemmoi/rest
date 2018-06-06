import { RSAA } from 'redux-api-middleware'; 

export const putData = (data) => ({
    [RSAA]: {
        endpoint: `https://jsonplaceholder.typicode.com/posts/1`,
        method: 'PUT',
        types: ['PUT_REQUEST', 'PUT_SUCCESS', 'PUT_FAILURE'],
        body: JSON.stringify(data)
    }
});