import { render, screen } from "@testing-library/react";
import Tasks from "./Tasks";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

jest.mock("./SortBy/SortBy", () => {
  return {
    __esModule: true,
    A: true,
    default: () => {
      return <div>SortBy component test</div>;
    },
  };
});

jest.mock("./IncompleteTask/IncompleteTask", () => {
  return {
    __esModule: true,
    A: true,
    default: () => {
      return <div>Incomplete task component test</div>;
    },
  };
});

jest.mock("./CompleteTask/CompleteTask", () => {
  return {
    __esModule: true,
    A: true,
    default: () => {
      return <div>Complete task component test</div>;
    },
  };
});

describe("<Tasks />", () => {
  test("SortBy component is present", () => {
    render(<Tasks />);
    const SortBycomponent = screen.getByText("SortBy component test");
    expect(SortBycomponent).toBeInTheDocument();
  });
  test("IncompleteTask component is present", () => {
    render(<Tasks />);
    const Incompletecomponent = screen.getByText(
      "Incomplete task component test"
    );
    expect(Incompletecomponent).toBeInTheDocument();
  });
  test("CompleteTask component is present", () => {
    render(<Tasks />);
    const Completecomponent = screen.queryByText(
      "Complete task component test"
    );
    expect(Completecomponent).toBeNull();
  });
  test("'View completed items' button is present on first page rendering", () => {
    render(<Tasks />);
    const viewCompleteItemsButton = screen.getByRole("button", {
      name: "View completed items",
    });
    expect(viewCompleteItemsButton).toBeInTheDocument();
  });
  test("'Hide completed items' button is NOT present on first page rendering", () => {
    render(<Tasks />);
    const hideCompleteItemsButton = screen.queryByRole("button", {
      name: "Hide completed items",
    });
    expect(hideCompleteItemsButton).toBeNull();
  });
  test("Click on the 'Add a new add' button leads to the AddItems page", () => {
    render(<Tasks />);
    const addButton = screen.getByRole("button", { name: "Add a new item" });
    userEvent.click(addButton);
    expect(mockNavigate).toHaveBeenCalledWith("/additems");
  });
  test("Click on the 'View completed items' button leads to appearing of 2 new components", async () => {
    render(<Tasks />);
    const viewCompleteItemsButton = screen.getByRole("button", {
      name: "View completed items",
    });
    userEvent.click(viewCompleteItemsButton);
    const Completecomponent = await screen.findByText(
      "Complete task component test"
    );
    const hideCompleteItemsButton = screen.getByRole("button", {
      name: "Hide completed items",
    });
    expect(Completecomponent).toBeInTheDocument();
    expect(hideCompleteItemsButton).toBeInTheDocument();
  });
  test("Click on the 'Hide completed items' button leads to rendering of the 'View complete items' button", () => {
    render(<Tasks />);
    const viewCompleteItemsButton = screen.getByRole("button", {
      name: "View completed items",
    });
    userEvent.click(viewCompleteItemsButton);
    const hideCompleteItemsButton = screen.getByRole("button", {
      name: "Hide completed items",
    });
    userEvent.click(hideCompleteItemsButton);
    const Completecomponent = screen.queryByText(
      "Complete task component test"
    );
    expect(Completecomponent).toBeNull();
  });
});
