import {combineReducers} from 'redux'
import getReducer from '../reducers/getReducer'
import putReducer from '../reducers/putReducer'
import postReducer from '../reducers/postReducer'
import patchReducer from '../reducers/patchReducer'
import deleteReducer from '../reducers/deleteReducer'

export default combineReducers({
    getData: getReducer,
    putData: putReducer,
    postData: postReducer,
    patchData: patchReducer,
    deleteData: deleteReducer
});