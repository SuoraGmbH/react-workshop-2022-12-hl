import { combineReducers } from "redux";
import timeEntries from "./timeEntries/timeEntries";

const appReducer = combineReducers({
  timeEntries: timeEntries,
});

export default appReducer;
