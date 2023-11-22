import React from "react";
import { Link } from 'react-router-dom';

const NavBar = ({token}) => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/books">Book List</Link>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
			{token && <Link to="/account">Account</Link>}
		</nav>
	);
};

export default NavBar;