import { render, screen } from "@testing-library/react";
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
    expect(flowers.length).toBe(2);
  });
});
