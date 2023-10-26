import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "./Filter";

describe("Filter", () => {
  test("should be able to change value of favourite select", async () => {
    render(<Filter filters={{}} setFilters={() => {}} />);

    const filterElement = screen.getByLabelText(/favourite/i);
    expect(filterElement.value).toBe("any");

    await userEvent.selectOptions(filterElement, "favoured");
    expect(filterElement.value).toBe("favoured");

    await userEvent.selectOptions(filterElement, "not favoured");
    expect(filterElement.value).toBe("not favoured");
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
