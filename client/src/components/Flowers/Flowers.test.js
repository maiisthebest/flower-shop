import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Flowers from "./Flowers";
import { rest } from "msw";
import { setupServer } from "msw/node";
import flowersMock from "../../mocks/flowers";

const server = setupServer(
  rest.get("http://localhost:4000/flowers", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(flowersMock))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Flowers", () => {
  test("should render the correct amount of flowers", async () => {
    render(<Flowers />);

    const flowers = await screen.findAllByRole("article");
    expect(flowers.length).toBe(3);
  });

  test("should filter for pink flowers", async () => {
    render(<Flowers />);

    const allCards = await screen.findAllByRole("article");
    expect(allCards.length).toBe(3);

    await userEvent.selectOptions(screen.getByLabelText("Colour"), "Pink");

    const pinkCards = await screen.findAllByRole("article");
    expect(pinkCards.length).toBe(2);

    // allCards[0] and allCards[2] correspond to pink flowers in the mocked data set
    expect(pinkCards).toStrictEqual([allCards[0], allCards[2]]);
  });

  test("should filter for yellow flowers", async () => {
    render(<Flowers />);

    const allCards = await screen.findAllByRole("article");
    expect(allCards.length).toBe(3);

    await userEvent.selectOptions(screen.getByLabelText("Colour"), "Yellow");

    const pinkCards = await screen.findAllByRole("article");
    expect(pinkCards.length).toBe(1);

    // allCards[1] corresponds to yellow flowers in the mocked data set
    expect(pinkCards).toStrictEqual([allCards[1]]);
  });

  test("should filter for any flowers", async () => {
    render(<Flowers />);

    const allCards = await screen.findAllByRole("article");
    expect(allCards.length).toBe(3);

    await userEvent.selectOptions(screen.getByLabelText("Colour"), "Any");

    const anyCards = await screen.findAllByRole("article");
    expect(anyCards.length).toBe(3);

    expect(anyCards).toStrictEqual([allCards[0], allCards[1], allCards[2]]);
  });
});
