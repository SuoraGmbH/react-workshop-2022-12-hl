import { TimeEntry } from "../domain/TimeEntry";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TimeEntry[] = [];

const timeEntriesSlice = createSlice({
  name: "timeEntries",
  initialState,
  reducers: {
    addTimeEntry: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTimeEntry } = timeEntriesSlice.actions;

export const selectTimeEntries = (state: any) => state.timeEntries;
export default timeEntriesSlice.reducer;
