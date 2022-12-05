import React from "react";
import TimeEntryView from "./component/TimeEntryView";
import { TimeEntry } from "./domain/TimeEntry";

function App() {
  const timeEntry: TimeEntry = {
    comment: "React Training",
    id: "husd9auhdaso8jdu80duj08",
    start: new Date(),
    end: new Date(),
  };

  return (
    <div>
      <h1>Christian</h1>
      <TimeEntryView timeEntry={timeEntry} />
    </div>
  );
}

export default App;
