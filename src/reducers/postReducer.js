import {POST_DATA} from '../actions/postAction'

const initialState = {
    data: {
        reducer: "post"
    }
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_DATA:
            return Object.assign({}, state, {data: action.payload});
        default:
            return state
    }
}

export default postReducer
