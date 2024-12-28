import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div style={{display:"flex",gap:"20px",flexWrap:'wrap'    }}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.title} />
      ))}
    </div>
  );
}

export default MovieList;
