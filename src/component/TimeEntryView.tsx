interface Props {
  comment: string;
}

const TimeEntryView = ({ comment }: Props) => {
  return <div>Comment: {comment}</div>;
};

export default TimeEntryView;
