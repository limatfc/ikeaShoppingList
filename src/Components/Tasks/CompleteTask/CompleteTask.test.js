import { render, screen } from "@testing-library/react";
import CompleteTask from "./CompleteTask";
import "@testing-library/jest-dom";

describe("<CompleteTask />", () => {
  test("CompleteTask component is showing complete tasks", () => {
    render(
      <CompleteTask
        inputedTasks={[
          {
            status: "complete",
          },
        ]}
      />
    );
    const completeElement = screen.getByRole("img", {
      name: "black and white",
    });
    expect(completeElement).toBeInTheDocument();
  });
  test("CompleteTask component is NOT showing incomplete tasks", () => {
    render(
      <CompleteTask
        inputedTasks={[
          {
            status: "incomplete",
          },
        ]}
      />
    );
    const completeElement = screen.queryByRole("img", {
      name: "black and white",
    });
    expect(completeElement).toBeNull();
  });
  test("Inputed name and price are rendered", () => {
    render(
      <CompleteTask
        inputedTasks={[
          {
            name: "desk",
            price: 500,
            status: "complete",
          },
        ]}
      />
    );
    const inputNameElement = screen.getByText("desk", { exact: false });
    const inputPriceElement = screen.getByText("500", { exact: false });
    expect(inputNameElement).toBeInTheDocument();
    expect(inputPriceElement).toBeInTheDocument();
  });
});
