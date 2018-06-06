import { RSAA } from 'redux-api-middleware'; 

export const postData = (data) => ({
    [RSAA]: {
        endpoint: `https://jsonplaceholder.typicode.com/posts`,
        method: 'POST',
        types: ['POST_REQUEST', 'POST_SUCCESS', 'POST_FAILURE'],
        body: JSON.stringify(data)
    }
});