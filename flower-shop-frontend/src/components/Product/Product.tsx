import { ProductType } from "../../types/ProductType";
import "./Product.css";

interface ProductProps {
	product: ProductType;
}

const Product = ({ product }: ProductProps) => {
	return (
		<article className="product">
			<div className="product-header">
				<img src={product.imageUrl} className="product-img" />
			</div>

			<div>
				<h3>{product.name}</h3>
				<p>${product.price.toFixed(2)}</p>
			</div>
		</article>
	);
};

export default Product;
