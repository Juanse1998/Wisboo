import React, { useState, useEffect } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { getFavorites } from "../../Services/images";
import NavBar from "../NavBar/NavBar"
import './Favorites.css'


export default function Favorites() {
	const [favoritas, setFavoritas] = useState([]);

  useEffect(async () => {
    const favorites = await getFavorites();
    console.log('Favoritas', favorites.data)
    setFavoritas(favorites.data)
  },[]);

		return (
      <>
      <NavBar />
			<div className="conten-images">
         {favoritas.map((r) => (
           <div className="card">    
					 <CardMedia
							component="img"
							alt="Contemplative Reptile"
							height="220"
							width="150"
              src={r.url}
            />    
            </div>
         ))}
			</div>
      </>
		);
	// }
}