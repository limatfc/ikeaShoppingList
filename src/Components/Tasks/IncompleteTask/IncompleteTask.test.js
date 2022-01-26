import { render, screen } from "@testing-library/react";
import IncompleteTask from "./IncompleteTask";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const mockonTaskChangeHandler = jest.fn();

describe("<IncompleteTask />", () => {
  test("IncompleteTask component is showing incomplete tasks", () => {
    render(
      <IncompleteTask
        inputedTasks={[
          {
            status: "incomplete",
          },
        ]}
      />
    );
    const incompleteElement = screen.getByRole("img", {
      name: "black and white with default value",
    });
    expect(incompleteElement).toBeInTheDocument();
  });
  test("IncompleteTask component is NOT showing complete tasks", () => {
    render(
      <IncompleteTask
        inputedTasks={[
          {
            status: "complete",
          },
        ]}
      />
    );
    const incompleteElement = screen.queryByRole("img", {
      name: "black and white with default value",
    });
    expect(incompleteElement).toBeNull();
  });
  test("Input changes pass key value to a function", () => {
    render(
      <IncompleteTask
        inputedTasks={[
          {
            status: "incomplete",
            key: 1,
          },
        ]}
        onTaskChangeHandler={mockonTaskChangeHandler}
      />
    );
    const inputElement = screen.getByRole("checkbox");
    userEvent.click(inputElement);
    expect(mockonTaskChangeHandler).toBeCalledWith("1");
  });
  test("Inputed name and price are rendered", () => {
    render(
      <IncompleteTask
        inputedTasks={[
          {
            name: "table",
            price: 112,
            status: "incomplete",
          },
        ]}
      />
    );
    const inputNameElement = screen.getByText("table", { exact: false });
    const inputPriceElement = screen.getByText("112", { exact: false });
    expect(inputNameElement).toBeInTheDocument();
    expect(inputPriceElement).toBeInTheDocument();
  });
});
