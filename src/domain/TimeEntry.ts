export interface TimeEntry {
  id: string;
  comment: string;
  start: Date;
  end: Date;
}

type TimeEntryFieldNames = keyof TimeEntry;

type NewTimeEntry = Omit<TimeEntry, "id">;
type TimeEntryTimes = Pick<TimeEntry, "start" | "end">;
type TimeEntryId = TimeEntry["id"];

type PartialTimeEntry = Partial<TimeEntry>;
