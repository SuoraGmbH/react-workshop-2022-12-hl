import React from "react";

interface Props {
  comment: string;
}

const TimeEntryView: React.FunctionComponent<Props> = ({ comment }) => {
  return <div>Comment: {comment}</div>;
};

export default TimeEntryView;
