import React from "react";
import TimeEntryForm from "./TimeEntryForm";
import { addTimeEntry } from "../redux/timeEntriesSlice";
import { TimeEntry } from "../domain/TimeEntry";
import { useDispatch } from "react-redux";

const TimeEntryFormWithRedux: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    dispatch(addTimeEntry(timeEntry));
  };

  return <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />;
};

export default TimeEntryFormWithRedux;
