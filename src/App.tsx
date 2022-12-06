import React from "react";
import TimeEntryView from "./component/TimeEntryView";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./component/TimeEntryForm";

function App() {
  const timeEntry: TimeEntry = {
    comment: "React Training",
    id: "husd9auhdaso8jdu80duj08",
    start: new Date(),
    end: new Date(),
  };

  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    console.log(timeEntry);
  };

  return (
    <div>
      <h1>Christian</h1>
      <TimeEntryView timeEntry={timeEntry} />
      <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
      <TimeEntryForm onSubmitButtonClick={console.log} />
    </div>
  );
}

export default App;
