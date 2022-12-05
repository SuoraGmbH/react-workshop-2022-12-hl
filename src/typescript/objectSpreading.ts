import { TimeEntry } from "../domain/TimeEntry";

const timeEntry: TimeEntry = {
  comment: "React Training",
  id: "husd9auhdaso8jdu80duj08",
  start: new Date(),
  end: new Date(),
};

const timeEntryWithPriority = {
  priority: 100,
  ...timeEntry,
  id: "unknown",
};
