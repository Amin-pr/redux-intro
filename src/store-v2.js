import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/costumers/customerslice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";


const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
