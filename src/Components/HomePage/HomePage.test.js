import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

jest.mock("./Summary/Summary", () => {
  return {
    __esModule: true,
    A: true,
    default: () => {
      return <div>Summary test</div>;
    },
  };
});

describe("<HomePage />", () => {
  test("Summary component is present", () => {
    render(<HomePage />);
    const summaryElement = screen.getByText("Summary test");
    expect(summaryElement).toBeInTheDocument();
  });

  test("Home Page Image component is present", () => {
    render(<HomePage />);
    const IkeaLogoElement = screen.getByAltText("A blue purse", {
      exact: false,
    });
    expect(IkeaLogoElement).toBeInTheDocument();
  });
  test("Ikea Logo component is present", () => {
    render(<HomePage />);
    const IkeaLogoElement = screen.getByRole("img", { name: "IKEA logo" });
    expect(IkeaLogoElement).toBeInTheDocument();
  });
  test("Button component is receiving 'Add Items' text", () => {
    render(<HomePage />);
    const ButtonElement = screen.getByText("Add Items");
    expect(ButtonElement).toBeInTheDocument();
  });
  test("Click on the button component leads to the AddItems page", () => {
    render(<HomePage />);
    const ButtonElement = screen.getByText("Add Items");
    userEvent.click(ButtonElement);
    expect(mockNavigate).toHaveBeenCalledWith("/additems");
  });
});
