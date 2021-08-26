interface SortBy {
    type: string
    order: string
}

export interface FiltersState {
    category: number | null
    sortBy: SortBy
}

export enum FiltersActionTypes {
    SET_SORT_BY = 'SET_SORT_BY',
    SET_CATEGORY = 'SET_CATEGORY',
}

interface SetSortByAction {
    type: FiltersActionTypes.SET_SORT_BY
    payload: any
}
interface SetCategoryAction {
    type: FiltersActionTypes.SET_CATEGORY
    payload: number
}

export type FilterAction = SetSortByAction | SetCategoryAction
