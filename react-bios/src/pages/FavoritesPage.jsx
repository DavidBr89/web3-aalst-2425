import React from "react";
import { useFavorites } from "../contexts/FavoritesContext";

const FavoritesPage = () => {
  // State uit de context uit halen
  const { favorites } = useFavorites();

  return <div></div>;
};

export default FavoritesPage;
