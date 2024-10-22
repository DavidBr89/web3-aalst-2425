import React from "react";

import movies from "../utils/films.json";
import MovieItem from "./MovieItem";
// Achter de schermen gaat dit nu een array zijn van JS objecten

const Movies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 p-4">
      {movies.map((m) => (
        <MovieItem key={m.id} movie={m} />
      ))}
    </div>
  );
};

export default Movies;
