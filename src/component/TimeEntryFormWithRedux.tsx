import React from "react";
import TimeEntryForm from "./TimeEntryForm";
import { useDispatch } from "react-redux";
import { TimeEntry } from "../domain/TimeEntry";
import { addTimeEntry } from "../redux/timeEntries/timeEntries";

const TimeEntryFormWithRedux: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    const action = addTimeEntry(timeEntry);
    dispatch(action);

    // Usually written like this:
    // dispatch(addTimeEntry(timeEntry));
  };
  return <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />;
};

export default TimeEntryFormWithRedux;
