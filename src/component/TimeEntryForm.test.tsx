import { render, screen } from "@testing-library/react";
import TimeEntryForm from "./TimeEntryForm";
import userEvent from "@testing-library/user-event";

const fakeTimers = jest.useFakeTimers();
fakeTimers.setSystemTime(new Date("2022-08-25 13:42:23"));
describe("<TimeEntryForm />", function () {
  test("verify clicking emits the evnet", () => {
    const handleAddTimeEntry = jest.fn();
    render(<TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />);
    // fakeTimers.advanceTimersByTime(1000);
    userEvent.click(
      screen.getByRole("button", {
        name: /submit/i,
      })
    );

    expect(handleAddTimeEntry).toHaveBeenCalled();
    expect(handleAddTimeEntry).toHaveBeenCalledWith(
      expect.objectContaining({
        comment: "asduhodiaus",
        id: "asndodasoidas",
      })
    );

    expect(handleAddTimeEntry).toHaveBeenCalledWith({
      comment: "asduhodiaus",
      id: "asndodasoidas",
      start: new Date("2022-08-25 13:42:23"),
      end: new Date("2022-08-25 13:42:23"),
    });
  });
});
