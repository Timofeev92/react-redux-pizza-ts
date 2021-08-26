import produce from "immer"
import { PizzasAction, PizzasActionTypes, PizzasState } from "../../types/pizzas";


const initialState: PizzasState = {
    items: [],
    isLoaded: false
}

const pizzas = (state = initialState, action: PizzasAction): PizzasState => {
    return produce(state, (draft: any) => {
        switch (action.type) {
            case PizzasActionTypes.SET_PIZZAS:
                draft.items = action.payload;
                draft.isLoaded = true
                break
            case PizzasActionTypes.SET_LOADED:
                draft.isLoaded = action.payload
                break
            default:
                break
        }
    })
}




export default pizzas
