import "./App.css";

import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home.jsx";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Route exact path="/" component={Home} />
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
