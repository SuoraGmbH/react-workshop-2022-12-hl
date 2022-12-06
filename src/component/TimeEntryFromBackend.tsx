import React from "react";
import TimeEntryView from "./TimeEntryView";
import { TimeEntry } from "../domain/TimeEntry";

interface Props {
  timeEntry?: TimeEntry;
}

const TimeEntryFromBackend: React.FunctionComponent<Props> = ({
  timeEntry,
}) => {
  return (
    <div>
      <h1>Is it there?</h1>
      {timeEntry && <TimeEntryView timeEntry={timeEntry} />}
    </div>
  );
};

export default TimeEntryFromBackend;
