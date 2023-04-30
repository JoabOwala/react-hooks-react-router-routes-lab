import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList = actors.map((act, index) =>{
    const movieList = (act.movies).map((mov)=><li key={index.id}>{mov}</li>)
  return (
    <div>
      <h2>Name: {act.name}</h2>
      <p>Movies: </p>
      <ul>
        {movieList}
      </ul>
    </div>
  )
  })

  return <div>
    <h1>Actors Page</h1> 
    {actorList}
    </div>;
}

export default Actors;
