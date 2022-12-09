import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./App";

const Navbar = ({ handleClick }) => {
	const theme = useContext(ThemeContext);
	const className = "navbar " + theme;

	return (
		<nav className={className}>
			<Link to="/">
				<h1>Musings of a Lonely AI</h1>
			</Link>
			<div className="links">
				{/* <Link to="/">Home</Link> */}
				<Link to="/create">+ New Blog</Link>
				<button onClick={handleClick}>Dark Mode</button>
			</div>
		</nav>
	);
};

export default Navbar;
