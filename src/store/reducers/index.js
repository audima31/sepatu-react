import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import AuthReducer from "./AuthReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  ProductReducer,
  AuthReducer,
  CartReducer,
});

export default rootReducer;
