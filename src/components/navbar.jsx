import '../styles/navbar.css';
import { MdHome } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';
import { IoCartSharp } from 'react-icons/io5';

export default function Navbar() {
	return (
		<div className="Navbar">
			<div className="Logo">
				<MdHome className="icon" />
			</div>
			<div className="Menus">
				<p>Home</p>
				<p>Products</p>
				<p>About Us</p>
			</div>
			<div className="Icons">
				<IoMdSearch className="icon" />
				<IoCartSharp className="icon cart-icon" />
			</div>
		</div>
	);
}
