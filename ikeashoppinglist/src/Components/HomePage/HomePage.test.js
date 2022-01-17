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

jest.mock("./HomePageImage/HomePageImage", () => {
  return {
    __esModule: true,
    A: true,
    default: () => {
      return <div>Home Page Image test</div>;
    },
  };
});

jest.mock("./IkeaLogo/IkeaLogo", () => {
  return {
    __esModule: true,
    A: true,
    default: () => {
      return <div>Ikea Logo test</div>;
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
    const HPImageElement = screen.getByText("Home Page Image test");
    expect(HPImageElement).toBeInTheDocument();
  });
  test("Ikea Logo component is present", () => {
    render(<HomePage />);
    const IkeaLogoElement = screen.getByText("Ikea Logo test");
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
