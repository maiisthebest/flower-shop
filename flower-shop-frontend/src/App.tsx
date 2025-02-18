import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import axios from "axios";
import { ProductType } from "./types/ProductType";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const App = () => {
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		axios
			.get(`${API_BASE_URL}/products/show`)
			.then((response) => setProducts(response.data))
			.catch((error) => console.log("Error fetching product: ", error));
	}, []);
	return (
		<>
			<h1>Welcome to Flower Shop</h1>
			<div className="product-list">
				{products.map((product, index) => (
					<Product product={product} key={index} />
				))}
			</div>
		</>
	);
};

export default App;
