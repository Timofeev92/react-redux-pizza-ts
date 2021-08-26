import produce from "immer"
import { FilterAction, FiltersActionTypes, FiltersState } from "../../types/filters"


const initialState: FiltersState = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    }
}

const filters = (state = initialState, action: FilterAction): FiltersState => {
    return produce(state, (draft: any) => {
        switch (action.type) {
            case FiltersActionTypes.SET_SORT_BY:
                draft.sortBy = { type: action.payload.type, order: action.payload.order }
                break
            case FiltersActionTypes.SET_CATEGORY:
                draft.category = action.payload
                break
            default:
                break
        }
    })

}

export default filters
