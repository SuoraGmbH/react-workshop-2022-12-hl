import { TimeEntry } from "../../domain/TimeEntry";

const initialState: TimeEntry[] = [];

type TimeEntryAddAction = {
  // Union Discriminator
  type: "timeEntry/add";
  timeEntry: TimeEntry;
};

type InitAction = {
  type: "@@INIT";
};

type AppAction = InitAction | TimeEntryAddAction;

const timeEntriesReducer = (
  state = initialState,
  action: AppAction
): TimeEntry[] => {
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
