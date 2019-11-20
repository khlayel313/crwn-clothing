import {CartActionTypes} from './cart.types'
const INITIAL_STATE = {
    currentCart: null
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.SET_CURRENT_CART:
            return {
                ...state,
                currentCart: !state.currentCart
            }
            default:
                return state;
    }
}
export default cartReducer;