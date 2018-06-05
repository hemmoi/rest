import {PUT_DATA} from '../actions/putAction'

const initialState = {
    data: {
        reducer: "put"
    }
}

const putReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_DATA:
            return Object.assign({}, state, {data: action.payload});
        default:
            return state
    }
}

export default putReducer
