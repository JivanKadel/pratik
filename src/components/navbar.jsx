import '../styles/navbar.css';
import { MdHome } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';
import { IoCartSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className="Navbar">
			<div className="Logo">
				<Link to="/">
					<MdHome className="icon" />
				</Link>
			</div>
			<div className="Menus">
				<Link to={'/'}>
					<p>Home</p>
				</Link>
				<Link to={'/products'}>
					<p>Products</p>
				</Link>
				<Link to={'/about'}>
					<p>About Us</p>
				</Link>
			</div>
			<div className="Icons">
				<Link to={"/search"}>
					<IoMdSearch className="icon" />
				</Link>
				<Link to={'/cart'}>
					<IoCartSharp className="icon cart-icon" />
				</Link>
			</div>
		</div>
	);
}
