import {
    PUT_REQUEST,
    PUT_SUCCESS,
    PUT_FAILURE,
} from '../actions/putAction';

const initialState = {
    data: {
        reducer: "put"
    }
}

const putReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_REQUEST:
            return Object.assign({}, state, { isFetching: true });
        case PUT_SUCCESS:
            return Object.assign({}, state, { data: action.payload, isFetching: false });
        case PUT_FAILURE:
            return Object.assign({}, state, { error: action.payload, isFetching: false });
        default:
            return state
    }
}

export default putReducer
