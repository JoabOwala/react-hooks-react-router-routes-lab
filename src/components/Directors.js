import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map((dir, index) =>{
    const movieList = (dir.movies).map((mov)=><li key={index}>{mov}</li>)

    return (
      <div>
        <h2>Name: {dir.name}</h2>
        <p>Movies:</p>
        <ul>
          {movieList}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Directors Page</h1>
    {directorsList}
    </div>;
}

export default Directors;
