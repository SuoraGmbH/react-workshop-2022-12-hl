import React, { useState } from "react";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./component/TimeEntryForm";
import TimeEntryList from "./component/TimeEntryList";
import GithubRepoStats from "./component/GithubRepoStats";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import TimeEntryFormWithRedux from "./component/TimeEntryFormWithRedux";
import TimeEntryListFromRedux from "./component/TimeEntryListFromRedux";

const store = configureStore();

function App() {
  const [timeEntries, setTimeEntries] = useState<readonly TimeEntry[]>([]);

  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, timeEntry]);
    console.log(timeEntry);
  };

  return (
    <Provider store={store}>
      <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
      <hr />
      <TimeEntryList timeEntries={timeEntries} />
      <GithubRepoStats repoName="facebook/react" />
      <hr />
      <hr />
      <TimeEntryFormWithRedux />
      <TimeEntryListFromRedux />
    </Provider>
  );
}

export default App;
