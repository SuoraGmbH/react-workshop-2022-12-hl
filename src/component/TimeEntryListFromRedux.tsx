import React from "react";
import TimeEntryList from "./TimeEntryList";
import { useSelector } from "react-redux";
import { AppState } from "../redux/appReducer";

const TimeEntryListFromRedux: React.FunctionComponent = () => {
  const timeEntries = useSelector((state: AppState) => state.timeEntries);

  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromRedux;
