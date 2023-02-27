import { combineReducers } from "redux";
import todosReducer from "./todos/todosReducer";

const appReducer = combineReducers({
  todos: todosReducer,
});

export default appReducer;
