import { useState } from 'react';
import ProductForm from '../components/product_form';
import { addProduct, getAllProducts } from '../../data/product_data';

const AddProduct = () => {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log({ name, image, description, price });
		if (!name || !price || !description || !image) {
			alert('Please input all the fields');
			return;
		}
		await addProduct({ name, price, image, description });
		const allProducts = await getAllProducts();
		console.log(allProducts);
		alert('Product added successfully');
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<ProductForm
					name={name}
					image={image}
					description={description}
					price={price}
					onChangeName={(e) => setName(e.target.value)}
					onChangeImage={(e) => setImage(e.target.value)}
					onChangeDescription={(e) => setDescription(e.target.value)}
					onChangePrice={(e) => setPrice(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default AddProduct;
