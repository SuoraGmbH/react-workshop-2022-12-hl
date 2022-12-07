import { render, screen } from "@testing-library/react";
import TimeEntryView from "./TimeEntryView";
import { TimeEntry } from "../domain/TimeEntry";

const timeEntry: TimeEntry = {
  comment: "React Training",
  id: "husd9auhdaso8jdu80duj08",
  start: new Date(),
  end: new Date(),
};

describe("<TimeEntryView />", () => {
  test("Smoke Test", () => {
    render(<TimeEntryView timeEntry={timeEntry} />);
  });

  test("Verify that the comment is visible", () => {
    render(<TimeEntryView timeEntry={timeEntry} />);

    expect(
      screen.getByText(timeEntry.comment, { exact: false })
    ).toBeInTheDocument();
  });
});
