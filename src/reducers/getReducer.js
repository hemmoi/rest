import {
    GET_REQUEST,
    GET_SUCCESS,
    GET_FAILURE,
} from '../actions/getAction';

const initialState = {
    data: {
        reducer: "get"
    },
    isFetching: false,
    error: ""
}

const getReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return Object.assign({}, state, { isFetching: true });
        case GET_SUCCESS:
            return Object.assign({}, state, { data: action.payload, isFetching: false });
        case GET_FAILURE:
            return Object.assign({}, state, { error: action.payload, isFetching: false });
        default:
            return state
    }
}

export default getReducer
