import React from "react";
const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  console.log("Hello World");

  // console.log(this);
};

function handleSubmitAsFunction(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  console.log("Hello World");

  // console.log(this);
}

const TimeEntryForm: React.FunctionComponent = () => {
  return (
    <form onSubmit={handleSubmit}>
      <button>Submit</button>
    </form>
  );
};

export default TimeEntryForm;
