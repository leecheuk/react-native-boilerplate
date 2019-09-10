import { combineReducers } from 'redux';

const InitialState = {
        text: null,
        isError: false
}

const notificationReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return {
                text: action.notification.text,
                isError: action.notification.isError
            }
        case 'CLEAR_NOTIFICATION':
            return {
                text: null,
                isError: false
            }
        default:
            return state
    }
}

export default combineReducers({
    notification: notificationReducer
});