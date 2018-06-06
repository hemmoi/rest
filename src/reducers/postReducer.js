import {
    POST_REQUEST,
    POST_SUCCESS,
    POST_FAILURE,
} from '../actions/postAction';

const initialState = {
    data: {
        reducer: "post"
    }
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_SUCCESS:
            return Object.assign({}, state, {data: action.payload});
        default:
            return state
    }
}

export default postReducer
