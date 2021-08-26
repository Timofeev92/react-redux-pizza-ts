export interface PizzasState {
    items: object[]
    isLoaded: boolean
}
export enum PizzasActionTypes {
    SET_PIZZAS = 'SET_PIZZAS',
    SET_LOADED = 'SET_LOADED',
}

interface SetPizzasAction {
    type: PizzasActionTypes.SET_PIZZAS
    payload: Object
}
interface SetLoadedAction {
    type: PizzasActionTypes.SET_LOADED
    payload: boolean
}

export type PizzasAction = SetPizzasAction | SetLoadedAction
