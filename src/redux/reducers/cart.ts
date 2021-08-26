import produce from "immer";
import { reduce, map } from 'lodash';
import { CartAction, CartActionTypes, CartState } from "../../types/cart";

const initialState: CartState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action: CartAction): CartState => {
    return produce(state, (draft: any) => {
        switch (action.type) {
            case CartActionTypes.ADD_PIZZA_TO_CART:
                if (!draft.items[action.payload.id]) {
                    draft.items[action.payload.id] = [];
                }
                draft.items[action.payload.id].push(action.payload);
                break
            case CartActionTypes.PLUS_CART_ITEM:
                draft.items[action.payload].push(draft.items[action.payload][0]);
                break
            case CartActionTypes.MINUS_CART_ITEM:
                if (draft.items[action.payload].length > 1) {
                    draft.items[action.payload].pop(); //shift()
                }
                break
            case CartActionTypes.REMOVE_CART_ITEM:
                delete draft.items[action.payload]
                break
            case CartActionTypes.CLEAR_CART:
                draft.items = {}
                break
            default:
                break
        }
        const result = reduce(map(draft.items), (prev, cur: any) => prev.concat(cur), []);
        draft.totalPrice = result.reduce((total, obj: any) => obj.price + total, 0);
        draft.totalCount = result.length;
    })
}

export default cart
