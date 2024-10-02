/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ProductCard from '../components/product_card';
import '../styles/product.css';
const ProductPage = () => {
	const [allProducts, setAllProducts] = useState([]);
	return (
		<div className="ProductMain">
			<h1 className="ProductHeading">Our Products</h1>
			<p className="ProductSlogan">
				We make your food experience better & more delicious.
			</p>
			<div className="ProductCardsGrid">
				{allProducts.length > 0 ? (
					allProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))
				) : (
					<div id="no-product-found">No Products Found</div>
				)}
			</div>
		</div>
	);
};
export default ProductPage;
