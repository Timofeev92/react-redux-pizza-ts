import { combineReducers } from "redux";
import cart from "./cart";
import filters from "./filters";
import pizzas from "./pizzas";

const rootReducer = combineReducers({
    cart,
    pizzas,
    filters
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer