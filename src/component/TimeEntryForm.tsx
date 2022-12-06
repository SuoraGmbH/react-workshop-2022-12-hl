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

interface Props {
  onSubmitButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({
  onSubmitButtonClick,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <button onClick={onSubmitButtonClick}>Submit</button>
    </form>
  );
};

export default TimeEntryForm;
