import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  ProductReducer,
  AuthReducer,
});

export default rootReducer;
