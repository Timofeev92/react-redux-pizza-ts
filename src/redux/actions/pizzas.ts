import axios, { AxiosResponse } from "axios"
import { Dispatch } from "react"
import { PizzasAction, PizzasActionTypes } from "../../types/pizzas"



export const fetchPizzas = (category: number, sortBy: any) => (dispatch: Dispatch<PizzasAction>) => {
    dispatch(setLoaded(false))
    axios.get(
        `/pizzas?${category !== null ? `category=${category}` : ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({ data }: AxiosResponse<any>) => {
            dispatch(setPizzas(data))
        })
}

export const setPizzas = (items: any) => ({
    type: PizzasActionTypes.SET_PIZZAS,
    payload: items
})

export const setLoaded = (payload: boolean) => ({
    type: PizzasActionTypes.SET_LOADED,
    payload
})