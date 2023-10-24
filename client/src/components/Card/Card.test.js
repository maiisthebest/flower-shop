import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import flowersMock from "../../mocks/flowers";
import { FlowersContext } from "../Flowers/Flowers";
import Card from "./Card";

const cardProps = {
  name: "Pink Dahlia",
  phone: "123-456-789",
  email: "abc@some-email.com",
  image: {
    url: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
    alt: "altText",
  },
  favoured: false,
  index: 1,
};

describe("Card", () => {
  test("should show name of flower", () => {
    const name = "Pink Dahlia";
    render(<Card {...cardProps} name={name} />);

    expect(screen.getByRole("heading", { name: name })).toBeInTheDocument();
  });

  test("should show phone", () => {
    const phone = "123-456-789";
    render(<Card {...cardProps} phone={phone} />);

    expect(screen.getByText(phone)).toBeInTheDocument();
  });

  test("should show email", () => {
    const email = "abc@some-email.com";
    render(<Card {...cardProps} email={email} />);

    expect(screen.getByText(email)).toBeInTheDocument();
  });

  test("should show image with correct src", () => {
    const expectedAlt = "pink dahlia";
    const expectedSrc = "http://someurl/";
    render(
      <Card {...cardProps} image={{ url: expectedSrc, alt: expectedAlt }} />
    );

    const imageElement = screen.getByAltText(expectedAlt);
    expect(imageElement.src).toBe(expectedSrc);
  });

  test("should show outlined heart when the flower is not favoured", () => {
    render(<Card {...cardProps} favoured={false} />);

    expect(screen.queryByAltText("filled heart")).not.toBeInTheDocument();
    expect(screen.getByAltText("outlined heart")).toBeInTheDocument();
  });

  test("should show filled heart when the flower is favoured", () => {
    render(<Card {...cardProps} favoured={true} />);

    expect(screen.queryByAltText("outlined heart")).not.toBeInTheDocument();
    expect(screen.getByAltText("filled heart")).toBeInTheDocument();
  });

  test("should toggle heart status", async () => {
    const user = userEvent.setup();
    render(
      <FlowersContext.Provider
        value={{ flowers: flowersMock, setFlowers: () => {} }}
      >
        <Card {...cardProps} favoured={false} />
      </FlowersContext.Provider>
    );

    expect(screen.getByAltText("outlined heart")).toBeInTheDocument();
    expect(screen.queryByAltText("filled heart")).not.toBeInTheDocument();

    // User clicks to favour the flower
    const buttonElement = screen.getByRole("button");
    await user.click(buttonElement);

    expect(await screen.findByAltText("filled heart")).toBeInTheDocument();
    expect(screen.queryByAltText("outlined heart")).not.toBeInTheDocument();

    // User clicks to unfavour the flower
    await user.click(screen.getByRole("button"));

    expect(await screen.findByAltText("outlined heart")).toBeInTheDocument();
    expect(screen.queryByAltText("filled heart")).not.toBeInTheDocument();
  });
});
