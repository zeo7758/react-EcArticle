import {combineReducers} from 'redux'
import userInfo from './userInfo'
import isLoad from './isLoad'
import isToast from './toast'
export default combineReducers({
    userInfo,
    isLoad,
    isToast
})
