import { productDB } from '../utils/local_db';
import { productTableName } from '../utils/local_db_table_list';
import { v4 as ID } from 'uuid';

export const getAllProducts = async () => {
	try {
		const allProducts = await productDB.getItem(productTableName);
		return allProducts || [];
	} catch (e) {
		console.error('Error while fetching products', e);
	}
};

export const addProduct = async ({ name, price, image, description }) => {
	try {
		//generating random uuid
		const id = ID();
		//creating new products
		const newProduct = {
			id: id,
			name: name,
			price: price,
			image: image,
			description: description
		};
		//getting all products from local db
		const allProducts = (await productDB.getItem(productTableName)) || [];
		//Adding new product
		allProducts.push(newProduct);
		//update local DB
		await productDB.setItem(productTableName, allProducts);
	} catch (e) {
		console.error('Error while adding product', e);
	}
};

export const updateProduct = async ({
	id,
	name,
	price,
	image,
	description
}) => {
	try {
		//getting all products for finding the index to UPDATE
		const allProducts = (await productDB.getItem(productTableName)) || [];
		//finding index of product with the given id
		const index = allProducts.findIndex((product) => {
			return product.id === id;
		});

		if (index == -1) {
			throw new Error('Product not found');
		}

		//creating product object with id
		const productToUpdate = {
			id: id,
			name: name,
			price: price,
			image: image,
			description: description
		};

		//updating to the array at found index
		allProducts[index] = productToUpdate;
		//update to the local db with new array of objects
		await productDB.setItem(productTableName, allProducts);
	} catch (e) {
		console.error('Error while updating product', e);
	}
};

//DELETE PRODUCTS
export const deleteProduct = async ({ productId }) => {
	try {
		///Getting all products
		const allProducts = (await productDB.getItem(productTableName)) || [];
		//Filtering the allProducts array with given product id
		const filteredProducts = await allProducts.filer((product) => {
			return product.id !== productId;
		});
		//Updating with new array of products
		await productDB.setItem(productTableName, filteredProducts);
	} catch (e) {
		console.error('Error while deleting product', e);
	}
};
