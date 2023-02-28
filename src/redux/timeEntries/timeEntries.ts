import { TimeEntry } from "../../domain/TimeEntry";

const initialState: TimeEntry[] = [];

const timeEntriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "timeEntry/add":
      return [...state, action.timeEntry];
    default:
      return state;
  }
};

export const addTimeEntry = (timeEntry: TimeEntry) => {
  return {
    type: "timeEntry/add",
    timeEntry: timeEntry,
  };
};

export default timeEntriesReducer;
