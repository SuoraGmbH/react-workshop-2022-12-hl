import React, { useState } from "react";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./component/TimeEntryForm";
import TimeEntryList from "./component/TimeEntryList";
import GithubRepoStats from "./component/GithubRepoStats";

function App() {
  const [timeEntries, setTimeEntries] = useState<readonly TimeEntry[]>([]);

  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, timeEntry]);
    console.log(timeEntry);
  };

  return (
    <div>
      <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
      <hr />
      <TimeEntryList timeEntries={timeEntries} />
      <GithubRepoStats repoName="facebook/react" />
    </div>
  );
}

export default App;
