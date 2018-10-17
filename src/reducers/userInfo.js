import * as userType from './../constants/userInfo'

export default function userInfo (state = '111', action) {
    switch (action.type) {
        case userType.UPDATE_USERINFO:
            return action.data;
        break
        case userType.CLEAR_USERINFO:
            return null
        break
        default:
            return state;
        break
    }
}