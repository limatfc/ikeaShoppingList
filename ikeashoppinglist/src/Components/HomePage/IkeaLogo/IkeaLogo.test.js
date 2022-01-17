import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IkeaLogo from "./IkeaLogo";

describe("<IkeaLogo />", () => {
  test("IkeaLogo component is showing", () => {
    render(<IkeaLogo />);
    const IkeaLogoElement = screen.getByRole("img", { name: "IKEA logo" });
    expect(IkeaLogoElement).toBeInTheDocument();
  });
});
