import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ProductView from "../../components/ProductView";

const onSave = jest.fn();
const onCancel = jest.fn();

const user = {
  name: "John",
  age: 23,
  address: "Brasov",
};

describe("<UserView />", () => {
  it("should render component", () => {
    expect.assertions(1);

    render(<ProductView />);

    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("should render the user", () => {
    expect.assertions(3);

    render(<ProductView product={user} />);

    expect(screen.getByRole("textbox", { name: "Name" })).toHaveValue("John");
    expect(screen.getByRole("spinbutton", { name: "Age" })).toHaveValue(23);
    expect(screen.getByRole("textbox", { name: "Address" })).toHaveValue(
      "Brasov"
    );
  });

  it("should call the save method with user data", async () => {
    expect.assertions(3);

    render(<ProductView product={user} onSave={onSave} />);

    const saveBtn = screen.getByRole("button", { name: "Save" });

    act(() => {
      fireEvent.click(saveBtn);
    });

    await waitFor(() => {
      expect(onSave).toHaveBeenCalled();
      expect(onSave).toHaveBeenCalledWith({
        name: "John",
        age: 23,
        address: "Brasov",
      });
    });
  });
  it("should call the cancel method when cancell btn is clicked", async () => {
    expect.assertions(1);

    render(<ProductView product={user} onCancel={onCancel} />);

    const cancelBtn = screen.getByRole("button", { name: "Cancel" });

    act(() => {
      fireEvent.click(cancelBtn);
    });

    await waitFor(() => {
      expect(onCancel).toHaveBeenCalled();
    });
  });
  
});
