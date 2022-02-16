import { render, screen } from "@testing-library/react";
import { ModalOverlayer } from "./AddTask";
import "@testing-library/jest-dom";

jest.mock("./AddForm/AddForm", () => {
  return {
    __esModule: true,
    A: true,
    default: () => {
      return <div>Add form component test</div>;
    },
  };
});

describe("AddTask />", () => {
  test("AddForm component is showing", () => {
    render(<ModalOverlayer />);
    const AddTaskComponent = screen.queryByText("Add form component test");
    expect(AddTaskComponent).toBeInTheDocument();
  });
});
