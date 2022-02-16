import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddForm from "./AddForm";

const mockNavigate = jest.fn();
const mockContext = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

jest.mock("react", () => {
  const ActualReact = jest.requireActual("react");

  return {
    ...ActualReact,
    useContext: () => ({
      inputedTaskHandler: mockContext,
    }),
  };
});

describe("<AddForm />", () => {
  beforeEach(() => {
    render(<AddForm />);
  });

  test("onChange event on the name input generates an event object", () => {
    const event = {
      target: { value: "the-name" },
    };
    const inputName = screen.getByPlaceholderText("Product's name");
    fireEvent.change(inputName, event);
    expect(event.target.value).toBe("the-name");
  });

  test("onChange event on the price input generates an event object", () => {
    const event = {
      target: { value: "the-price" },
    };
    const inputPrice = screen.getByPlaceholderText("0.00");
    fireEvent.change(inputPrice, event);
    expect(event.target.value).toBe("the-price");
  });

  test("Click on the submit button passes the collected data to the context", () => {
    const eventName = {
      target: { value: "Table" },
    };
    const eventPrice = {
      target: { value: "300" },
    };

    const inputName = screen.getByPlaceholderText("Product's name");
    fireEvent.change(inputName, eventName);
    const inputPrice = screen.getByPlaceholderText("0.00");
    fireEvent.change(inputPrice, eventPrice);

    const allInputedDataArray = {
      name: "Table",
      price: "300.00",
      status: "incomplete",
    };

    const submitButton = screen.getByRole("button", { name: "Add" });
    userEvent.click(submitButton);
    expect(mockContext).toBeCalledWith(
      expect.objectContaining(allInputedDataArray)
    );
  });

  test("Click on the submit button leads to the 'Tasks' page", () => {
    const submitButton = screen.getByRole("button", { name: "Add" });
    userEvent.click(submitButton);
    expect(mockNavigate).toHaveBeenCalledWith("/shoppinglist");
  });
});
