import Cards from "./Cards";
import { render, screen } from "@testing-library/react";

describe("Cards", () => {
  test("should render 2 card components", () => {
    const flowers = [
      {
        name: "Pink Dahlia",
        phone: "123-456-789",
        email: "abc@some-email.com",
        image: {
          url: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
          alt: "pink dahlia",
        },
        favoured: false,
      },
      {
        name: "Sunflower",
        phone: "222-333-444",
        email: "def@some-email.com",
        image: {
          url: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
          alt: "sunflower",
        },
        favoured: true,
      },
    ];
    render(<Cards flowers={flowers} />);

    expect(screen.getAllByRole("article")).toHaveLength(2);
  });
});
