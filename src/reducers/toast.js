import * as toastType from './../constants/toast'

const initState = {
    tips: 'tips',
    isShow: false
}

export default function isToast (state = initState, action) {
    switch (action.type) {
        case toastType.HIDE_TOAST:
            return Object.assign({}, {
                tips: '',
                isShow: false
            })
        case toastType.SHOW_TOAST:
            return Object.assign({}, {
                tips: action.data,
                isShow: true
            })
        default:
            return state;
        break
    }
}
