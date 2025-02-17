import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import axios from "axios";
import { ProductType } from "./types/ProductType";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const App = () => {
	const [product, setProduct] = useState<ProductType | null>(null);

	useEffect(() => {
		axios
			.get(`${API_BASE_URL}/products/show`)
			.then((response) => setProduct(response.data))
			.catch((error) => console.log("Error fetching product: ", error));
	}, []);
	return (
		<div>
			<h1>Welcome to Flower Shop</h1>
			{product ? <Product product={product} /> : <p>Loading...</p>}
		</div>
	);
};

export default App;
