import React from "react";

import "./NavBar.css";

import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<header className="navbar">
			<nav>
				<div className="lista">
					<p>
						<NavLink exact to="/">Buscar Imagenes</NavLink>
					</p>
					<p>
						<NavLink exact to="/favorites">Mis Imagenes</NavLink>
					</p>
				</div>
			</nav>
		</header>
	);
}
