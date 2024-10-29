import React from "react";
import { useParams } from "react-router-dom";

import movies from "../utils/films.json";

const DetailsPage = () => {
  // ID binnen krijgen vanuit de parameters
  const { id } = useParams();
  // Op dit punt heb je de id vanuit uw parameters

  const movie = movies.find((m) => m.id === Number.parseInt(id));

  if (!movie) {
    return <p>Geen film gevonden met deze id.</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
};

export default DetailsPage;
