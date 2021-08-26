import { CartActionTypes } from '../../types/cart'

export const addPizzaToCart = (pizzaObj: object) => ({
    type: CartActionTypes.ADD_PIZZA_TO_CART,
    payload: pizzaObj
})

export const removeCartItem = (id: number) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: id
})

export const plusCartItem = (id: number) => ({
    type: CartActionTypes.PLUS_CART_ITEM,
    payload: id
})

export const minusCartItem = (id: number) => ({
    type: CartActionTypes.MINUS_CART_ITEM,
    payload: id
})


export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})
