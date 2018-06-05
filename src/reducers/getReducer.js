import {GET_DATA} from '../actions/getAction'

const initialState = {
    data: {
        reducer: "get"
    }
}

const getReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return Object.assign({}, state, {data: action.payload});
        default:
            return state
    }
}

export default getReducer
