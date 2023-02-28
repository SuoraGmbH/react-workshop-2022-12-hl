import { combineReducers } from "redux";
import timeEntries from "./todos/timeEntries";

const appReducer = combineReducers({
  timeEntries: timeEntries,
});

export default appReducer;
