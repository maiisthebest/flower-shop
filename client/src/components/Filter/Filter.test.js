import Filter from "./Filter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Filter", () => {
  test("should be able to change value of favourite select", async () => {
    render(<Filter />);

    const filterElement = screen.getByLabelText(/favourite/i);
    expect(filterElement.value).toBe("any");

    await userEvent.selectOptions(filterElement, "favourite");
    expect(filterElement.value).toBe("favourite");

    await userEvent.selectOptions(filterElement, "not favourite");
    expect(filterElement.value).toBe("not favourite");
  });

  test("should be able to change value of colour select", async () => {
    render(<Filter filters={{}} setFilters={() => {}} />);

    const filterElement = screen.getByLabelText(/colour/i);
    expect(filterElement.value).toBe("any");

    await userEvent.selectOptions(filterElement, "pink");
    expect(filterElement.value).toBe("pink");

    await userEvent.selectOptions(filterElement, "yellow");
    expect(filterElement.value).toBe("yellow");
  });
});
