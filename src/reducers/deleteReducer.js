import {
    DELETE_REQUEST,
    DELETE_SUCCESS,
    DELETE_FAILURE,
} from '../actions/deleteAction';

const initialState = {
    data: {
        reducer: "delete"
    },
    isFetching: false,
    error: ""
}

const deleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_REQUEST:
            return Object.assign({}, state, { isFetching: true });
        case DELETE_SUCCESS:
            return Object.assign({}, state, { data: action.payload, isFetching: false });
        case DELETE_FAILURE:
            return Object.assign({}, state, { error: action.payload, isFetching: false });
        default:
            return state
    }
}

export default deleteReducer
