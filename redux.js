//reducer
import { legacy_createStore } from "redux";
const cartReducer = (
    state = {
        cart: [{ id: 1, qty: 3 }],
    },
    action,
) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default: 
            return state;
    };

};

//store
const store = legacy_createStore(cartReducer);
console.log('oncreate store : ', store.getState());

//subscribe


//dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 1 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CART", payload: { id: 4, qty: 5 } };
store.dispatch(action2);