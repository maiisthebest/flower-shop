import { ProductType } from "../types/ProductType";

interface ProductProps {
	product: ProductType;
}

const Product = ({ product }: ProductProps) => {
	return (
		<div>
			<h2>{product.name}</h2>
			<img src={product.imageUrl} className="product-image" />
			<p>Price: ${product.price.toFixed(2)}</p>
		</div>
	);
};

export default Product;
