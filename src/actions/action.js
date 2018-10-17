import * as LoadType from './../constants/isLoad'
import * as userType from './../constants/userInfo'
import * as ToastType from './../constants/toast'

export function updateUser(data) {
    console.log('data',data)
    return {
        type: userType.UPDATE_USERINFO,
        data
    }
}

export function clearUser(data) {
    return {
        type: userType.CLEAR_USERINFO,
        data
    }
}

export function hideLoad(data) {
    return {
        type: LoadType.LOAD_HIDE,
        data
    }
}

export function showLoad(data) {
    console.log('showLoad')
    return {
        type: LoadType.LOAD_SHOW,
        data
    }
}

export function showToast(data) {
    console.log('showtoast',data);
    return {
        type: ToastType.SHOW_TOAST,
        data
    }
}
export function hideToast(data) {
    return {
        type: ToastType.HIDE_TOAST,
        data
    }
}
