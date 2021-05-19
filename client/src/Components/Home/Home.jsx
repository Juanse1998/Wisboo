import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import Cards from "../Card/Card";
import { getAllImages } from "../../Services/images";
// import NavBar from "../NavBar/NavBar.jsx";

import "./Home.css";
export default function Home() {
	const [imagenes, setImagenes] = useState(null);
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);

	var perPage = 6;

	async function searchImages(query, page, perPage) {
		var image = await getAllImages(query, page, perPage);
	}

	const handleInputChange = (event) => {
		setQuery({
			...query,
			[event.target.name]: event.target.value,
		});
	};

	async function sendQuery(e) {
		e.preventDefault();
		var text = query.query;
		const imagen = await getAllImages(text, page, perPage);
		setImagenes([imagen.results]);
	}

	async function upload(e) {
		e.preventDefault();
		var text = query.query;
		setPage(page + 1)
		console.log(page)
		const imagen = await getAllImages(text, page, perPage);
		setImagenes([...imagenes, imagen.results]);
	}
		


	return (
		<>
			{/* <NavBar /> */}
			<div className="contenedor">
				<div className="titulo">
					<form className="row" onSubmit={sendQuery}>
						<div className="col-md-3">
							<input
								type="text"
								placeholder="Query"
								className="form-control"
								onChange={handleInputChange}
								name="query"
							></input>
						</div>
						<button type="submit" className="btn btn-primary">
							Enviar
						</button>
					</form>
					<div className="conten-images">
						<div className="imagen">
							{
							
								imagenes && imagenes.map((r) => (
									(r.map((e) => (
										<Cards url={e.urls.full} />									
									)))
								))}
							
						</div>
					</div>
					<button type="submit" className="btn btn-primary" onClick={upload}>
						Cargar Mas
					</button>
				</div>
			</div>
		</>
	);
}
