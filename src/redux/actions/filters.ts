import { FiltersActionTypes } from '../../types/filters'


export const setSortBy = ({ type, order }: any) => ({
    type: FiltersActionTypes.SET_SORT_BY,
    payload: { type, order }
})

export const setCategory = (catIndex: number) => ({
    type: FiltersActionTypes.SET_CATEGORY,
    payload: catIndex
})