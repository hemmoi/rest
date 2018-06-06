import { RSAA } from 'redux-api-middleware'; 

export const getData = () => ({
    [RSAA]: {
        endpoint: `https://jsonplaceholder.typicode.com/posts`,
        method: 'GET',
        types: ['GET_REQUEST', 'GET_SUCCESS', 'GET_FAILURE']
    }
});

export const getDataFail = () => ({
    [RSAA]: {
        endpoint: `https://jsonplaceholder.typicode.com/foo`,
        method: 'GET',
        types: ['GET_REQUEST', 'GET_SUCCESS', 'GET_FAILURE']
    }
});
