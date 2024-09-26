import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function App() {
	return (
		<div className="AppContainer">
			<Navbar />
			<div className="AppContent">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
