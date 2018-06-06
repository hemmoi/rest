const initialState = {
    data: {
        reducer: "delete"
    }
}

const deleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_DATA":
            return Object.assign({}, state, {data: action.payload});
        default:
            return state
    }
}

export default deleteReducer
