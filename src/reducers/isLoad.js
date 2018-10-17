import * as LoadType from './../constants/isLoad'

export default function isLoad (state = false, action) {
    console.log(action)
    switch (action.type) {
        case LoadType.LOAD_HIDE:
            return false
        break
        case LoadType.LOAD_SHOW:
            return true;
        break
        default:
            return state;
        break
    }
}