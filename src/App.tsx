import React from "react";
import TimeEntryView from "./component/TimeEntryView";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./component/TimeEntryForm";
import TimeEntryList from "./component/TimeEntryList";

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

  // Create or modify the Props interface of TimeEntryForm
  // Add a new prop to TimeEntryForm: onAddTimeEntry
  // The type of the prop is a function that receives the "event payload" and returns void
  // The event payload should be a TimeEntry
  //
  // The new event handler should be called when the form is submitted
  // Move handleSubmit inside the TimeEntryForm for this

  return (
    <div>
      <h1>Christian</h1>
      <TimeEntryView timeEntry={timeEntry} />
      <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
      <TimeEntryList />
    </div>
  );
}

export default App;
