import { combineReducers } from "redux";
import timeEntriesReducer from "./timeEntries/timeEntries";

const appReducer = combineReducers({
  timeEntries: timeEntriesReducer,
});

export default appReducer;
