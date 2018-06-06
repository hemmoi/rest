import {
    PATCH_REQUEST,
    PATCH_SUCCESS,
    PATCH_FAILURE,
} from '../actions/patchAction';

const initialState = {
    data: {
        reducer: "patch"
    }
}

const patchReducer = (state = initialState, action) => {
    switch (action.type) {
        case PATCH_REQUEST:
            return Object.assign({}, state, { isFetching: true });
        case PATCH_SUCCESS:
            return Object.assign({}, state, { data: action.payload, isFetching: false });
        case PATCH_FAILURE:
            return Object.assign({}, state, { error: action.payload, isFetching: false });
        default:
            return state
    }
}

export default patchReducer
