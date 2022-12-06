import React from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

const TimeEntryList: React.FunctionComponent = () => {
  const timeEntries: TimeEntry[] = [
    {
      id: "adhsjioasd",
      comment: "React Basics Training",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "adhsjioasdasadsd",
      comment: "React Advanced Training",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "adh42342sjioasd",
      comment: "React Architecture Training",
      start: new Date(),
      end: new Date(),
    },
  ];

  return (
    <>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />
      ))}
    </>
  );
};

export default TimeEntryList;
