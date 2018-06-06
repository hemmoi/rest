import {
    GET_REQUEST,
    GET_SUCCESS,
    GET_FAILURE,
} from '../actions/getAction';

const initialState = {
    data: {
        reducer: "get"
    }
}

const getReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUCCESS:
            return Object.assign({}, state, {data: action.payload});
        default:
            return state
    }
}

export default getReducer
