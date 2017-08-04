import { combineReducers } from "redux";
import ProductsReducer from "./reducer_products";
import EventsReducer from "./reducer_events";

const rootReducer = combineReducers({
  products: ProductsReducer,
  events: EventsReducer
});

export default rootReducer;
