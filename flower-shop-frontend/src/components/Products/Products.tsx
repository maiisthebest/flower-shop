import { useEffect, useState } from "react";
import { ProductType } from "../../types/ProductType";
import axios from "axios";
import Product from "../Product/Product";
import "./Products.css";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const Products = () => {
	const [products, setProducts] = useState<ProductType[]>([]);

	const fetchProducts = () => {
		axios
			.get(`${API_BASE_URL}/products/show`)
			.then((response) => setProducts(response.data))
			.catch((error) => console.log("Error fetching product: ", error));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="products-container">
			{products.map((product, index) => (
				<Product product={product} key={index} />
			))}
		</div>
	);
};

export default Products;
