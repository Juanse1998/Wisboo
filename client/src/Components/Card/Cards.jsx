import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import { addFavorites } from "../../Services/images";
import axios from "axios";


import './Cards.css'


export default function Cards(url) {

	async function handleSubmit() {
		const data = {
			url: url.url
		}
		axios.post(`/images`, data).then((res) => res);
	}



	if (!url) {
		return 'loading...'
	} else {
	return (
		<Card className="card">
			<CardActionArea>
				<Button
					size="small"
					color="black"
					style={{
						backgroundColor: "#96eada",
						position: "absolute",
						marginTop: "8px",
						marginLeft: "280px",
					}}
					type="button"
					onClick={() => handleSubmit(url)}
				>
					Guardar
				</Button>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="220"
					width="150"
					src={url.url}
				/>
			</CardActionArea>
		</Card>
	);
	}
}
