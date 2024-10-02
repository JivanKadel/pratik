import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductPage from './pages/product_page.jsx';
import AddProduct from './admin-modules/pages/add_product.jsx';
import EditProduct from './admin-modules/pages/edit_product.jsx';
import ListProduct from './admin-modules/pages/list_product.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="products" element={<ProductPage />} />
					<Route path="/admin/product/add" element={<AddProduct />} />
					<Route path="/admin/product/edit" element={<EditProduct />} />
					<Route path="/admin/product/list" element={<ListProduct />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
