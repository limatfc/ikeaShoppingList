import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePageImage from "./HomePageImage";

describe("<HomePageImage />", () => {
  test("HomePageImage component is showing", () => {
    render(<HomePageImage />);
    const IkeaLogoElement = screen.getByAltText("A blue purse", {
      exact: false,
    });
    expect(IkeaLogoElement).toBeInTheDocument();
  });
});
