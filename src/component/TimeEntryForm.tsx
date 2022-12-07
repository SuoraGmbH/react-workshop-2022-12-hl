import React, { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";

interface Props {
  onAddTimeEntry: (timeEntry: TimeEntry) => void;
}
const TimeEntryForm: React.FunctionComponent<Props> = ({ onAddTimeEntry }) => {
  const [inputText, setInputText] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // strip numbers from the value
    const value = event.target.value.replace(/\d/g, "");
    setInputText(value);
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
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment
        <input onChange={handleChange} value={inputText} />
      </label>
      {inputText}

      <button>Submit</button>
    </form>
  );
};

export default TimeEntryForm;
