export interface CartState {
    items: Object
    totalPrice: number
    totalCount: number
}

export enum CartActionTypes {
    ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART',
    PLUS_CART_ITEM = 'PLUS_CART_ITEM',
    MINUS_CART_ITEM = 'MINUS_CART_ITEM',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    CLEAR_CART = 'CLEAR_CART',
}

interface AddPizzaToCartAction {
    type: CartActionTypes.ADD_PIZZA_TO_CART
    payload: any
}
interface PlusCartItemAction {
    type: CartActionTypes.PLUS_CART_ITEM
    payload: number
}
interface MinusCartItemAction {
    type: CartActionTypes.MINUS_CART_ITEM
    payload: number
}
interface RemoveCartItemAction {
    type: CartActionTypes.REMOVE_CART_ITEM
    payload: number
}

interface ClearCartAction {
    type: CartActionTypes.CLEAR_CART
}
export type CartAction = AddPizzaToCartAction | PlusCartItemAction | MinusCartItemAction | RemoveCartItemAction | ClearCartAction
