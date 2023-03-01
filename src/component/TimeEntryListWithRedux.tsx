import TimeEntryList from "./TimeEntryList";
import { useSelector } from "react-redux";
import { useAppSelector } from "../redux/store";

const TimeEntryListWithRedux: React.FunctionComponent = () => {
  const timeEntries = useAppSelector((state) => state.timeEntries);
  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListWithRedux;
