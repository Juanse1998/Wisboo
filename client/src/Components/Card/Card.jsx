import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import './Card.css'

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		marginButtom: '30px',
	},
});

export default function Cards(url) {
	const classes = useStyles();
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
