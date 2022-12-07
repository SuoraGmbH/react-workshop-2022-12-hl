import React, { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";

interface Props {
  onAddTimeEntry: (timeEntry: TimeEntry) => void;
}
const TimeEntryForm: React.FunctionComponent<Props> = ({ onAddTimeEntry }) => {
  const [inputText, setInputText] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onAddTimeEntry({
      comment: inputText,
      // @ts-ignore
      id: crypto.randomUUID(),
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
      {inputText}

      <button>Submit</button>
    </form>
  );
};

export default TimeEntryForm;
