import {
    POST_REQUEST,
    POST_SUCCESS,
    POST_FAILURE,
} from '../actions/postAction';

const initialState = {
    data: {},
    isFetching: false,
    error: ""
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return Object.assign({}, state, { isFetching: true });
        case POST_SUCCESS:
            return Object.assign({}, state, { data: action.payload, isFetching: false });
        case POST_FAILURE:
            return Object.assign({}, state, { error: action.payload, isFetching: false });
        default:
            return state
    }
}

export default postReducer
