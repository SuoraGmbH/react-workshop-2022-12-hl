import React from "react";
import TimeEntryList from "./TimeEntryList";
import { useSelector } from "react-redux";

const TimeEntryListFromRedux: React.FunctionComponent = () => {
  const timeEntries: any = useSelector<any>((state) => state.timeEntries);

  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromRedux;
