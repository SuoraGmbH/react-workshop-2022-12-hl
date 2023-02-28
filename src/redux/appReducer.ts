import { combineReducers } from "redux";
import timeEntriesReducer from "./timeEntries/timeEntries";

const appReducer = combineReducers({
  timeEntries: timeEntriesReducer,
});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;
