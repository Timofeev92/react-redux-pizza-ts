import { combineReducers } from "redux";
import cart from "./cart";
import filters from "./filters";
import pizzas from "./pizzas";




const rootReducer = combineReducers({
    cart,
    pizzas,
    filters
})

export default rootReducer