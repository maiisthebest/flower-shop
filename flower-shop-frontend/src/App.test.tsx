import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "./App";

vi.mock("axios");

describe("App", () => {
	beforeEach(() => {
		vi.resetAllMocks();
	});

	it("renders the list of products after fetching data", async () => {
		(axios.get as jest.Mock).mockResolvedValueOnce({
			data: [
				{
					name: "Orchid",
					imageUrl: "https://abcde.com/orchid.jpg",
					price: 29.99,
				},
			],
		});

		render(<App />);

		await waitFor(() => {
			expect(screen.getByText("Orchid")).toBeInTheDocument();
			expect(screen.getByText("Price: $29.99")).toBeInTheDocument();
			expect(screen.getByRole("img")).toHaveAttribute(
				"src",
				"https://abcde.com/orchid.jpg"
			);
		});
	});
});
