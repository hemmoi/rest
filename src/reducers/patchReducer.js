import {PATCH_DATA} from '../actions/patchAction'

const initialState = {
    data: {
        reducer: "patch"
    }
}

const patchReducer = (state = initialState, action) => {
    switch (action.type) {
        case PATCH_DATA:
            return Object.assign({}, state, {data: action.payload});
        default:
            return state
    }
}

export default patchReducer
