import {
    DELETE_REQUEST,
    DELETE_SUCCESS,
    DELETE_FAILURE,
} from '../actions/deleteAction';

const initialState = {
    data: {
        reducer: "delete"
    }
}

const deleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_SUCCESS:
            return Object.assign({}, state, {data: action.payload});
        default:
            return state
    }
}

export default deleteReducer
