import { render, screen } from "@testing-library/react";
import Summary from "./Summary";

describe("<Summary />", () => {
  test("Summary component is showing", () => {
    render(<Summary />);

    const summaryElement = screen.getAllByText("EIKA's shopping list", {
      exact: false,
    });
    expect(summaryElement).not.toHaveLength(0);
  });
});
