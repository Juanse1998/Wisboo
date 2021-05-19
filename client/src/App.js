import "./App.css";

import React from "react";
import Home from "./Components/Home/Home.jsx";
import Favorites from "./Components/Favorites/Favorites.jsx";

import { BrowserRouter, Route } from "react-router-dom";


function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Route exact path="/" component={Home} />
				<Route exact path="/favorites" component={Favorites} />
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
