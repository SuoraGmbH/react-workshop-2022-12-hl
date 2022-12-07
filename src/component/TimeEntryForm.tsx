import React, { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";

interface Props {
  onAddTimeEntry: (timeEntry: TimeEntry) => void;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({ onAddTimeEntry }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
  };

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
      <label>
        Comment
        <input onChange={handleChange} />
      </label>
      {/** Print the current Comment of the text box here */}

      <button>Submit</button>
    </form>
  );
};

export default TimeEntryForm;
