import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import tab from "redux/modules/tab";

const rootReducer = combineReducers({
  tab,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
