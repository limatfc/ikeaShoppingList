import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

const mockOnClickHandler = jest.fn();

describe("<Button />", () => {
  test("function onClickHandler is activated on click", () => {
    render(<Button onClickHandler={mockOnClickHandler} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(mockOnClickHandler).toBeCalled();
  });
});
