import * as types from '../actions/constants'

const initialState = [{
    open: false
}]

/**
 * Navigation bar
 * 
 * @param {Object[]} state
 * @param {Object} action 
 */
const navigation = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_MENU:
            return [
                { open: true }
            ];
        case types.HIDE_MENU:
            return [
                { open: false }
            ];
        default:
            return state;
    }
}

export default navigation