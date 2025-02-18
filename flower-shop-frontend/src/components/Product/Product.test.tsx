import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { ProductType } from "../../types/ProductType";

describe("Product", () => {
	it("renders product details correctly", () => {
		const mockProduct: ProductType = {
			name: "Rose",
			imageUrl: "https://abcxyz.com/rose.jpg",
			price: 10.99,
			id: 0,
		};

		render(<Product product={mockProduct} />);

		expect(screen.getByText("Rose")).toBeInTheDocument();
		expect(screen.getByRole("img")).toHaveAttribute(
			"src",
			"https://abcxyz.com/rose.jpg"
		);
		expect(screen.getByText("Price: $10.99")).toBeInTheDocument();
	});
});
