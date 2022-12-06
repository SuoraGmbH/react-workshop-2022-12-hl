import React from "react";
import { TimeEntry } from "../domain/TimeEntry";

interface Props {
  onAddTimeEntry: (timeEntry: TimeEntry) => void;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({ onAddTimeEntry }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onAddTimeEntry({
      comment: "asduhodiaus",
      id: "asndodasoidas",
      start: new Date(),
      end: new Date(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Submit</button>
    </form>
  );
};

export default TimeEntryForm;
