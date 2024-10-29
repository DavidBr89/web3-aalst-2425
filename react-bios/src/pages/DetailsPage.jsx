import React from "react";
import { useParams } from "react-router-dom";

import movies from "../utils/films.json";

const DetailsPage = () => {
  // ID binnen krijgen vanuit de parameters
  const { id } = useParams();
  // Op dit punt heb je de id vanuit uw parameters

  return <div>DetailsPage</div>;
};

export default DetailsPage;
