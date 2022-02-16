import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SortBy from "./Header";
import userEvent from "@testing-library/user-event";

const mockSortByName = jest.fn();
const mockSortByPrice = jest.fn();

describe("<SortBy />", () => {
  test("SortBy component is showing", () => {
    render(<SortBy />);
    const sortByElement = screen.getByText("Sort by:");
    expect(sortByElement).toBeInTheDocument();
  });
  test("function sortByName is called after button click", () => {
    render(<SortBy sortByName={mockSortByName} />);
    const sortByNameButton = screen.getByRole("button", { name: "Name" });
    userEvent.click(sortByNameButton);
    expect(mockSortByName).toBeCalled();
  });
  test("function sortByPrice is called after button click", () => {
    render(<SortBy sortByPrice={mockSortByPrice} />);
    const sortByPriceButton = screen.getByRole("button", { name: "Price" });
    userEvent.click(sortByPriceButton);
    expect(mockSortByPrice).toBeCalled();
  });
});
