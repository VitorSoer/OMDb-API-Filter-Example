import React from "react";
import { MoviesContainer } from "./styles/movies.styles";

function MoviesCard({ movie }) {
  return (
    <MoviesContainer>
      <img
        src={
          movie.Poster === "N/A"
            ? "https://freepikpsd.com/file/2019/10/image-not-found-png-4-Transparent-Images.png"
            : movie.Poster
        }
        alt={movie.Title}
      />
      <div>
        <h3>{movie.Title}</h3>
      </div>
    </MoviesContainer>
  );
}

export default MoviesCard;
