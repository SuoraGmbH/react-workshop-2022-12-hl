import React from "react";
const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  console.log("Hello World");
};

interface Props {}

const TimeEntryForm: React.FunctionComponent<Props> = ({}) => {
  return (
    <form onSubmit={handleSubmit}>
      <button>Submit</button>
    </form>
  );
};

export default TimeEntryForm;
