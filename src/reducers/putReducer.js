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
        case PUT_SUCCESS:
            return Object.assign({}, state, {data: action.payload});
        default:
            return state
    }
}

export default putReducer
