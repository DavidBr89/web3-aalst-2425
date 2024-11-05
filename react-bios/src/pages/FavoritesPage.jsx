import React from "react";
import { useFavorites } from "../contexts/FavoritesContext";
import MovieItem from "../components/MovieItem";

const FavoritesPage = () => {
  // State uit de context uit halen
  const { favorites } = useFavorites();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 p-8">
      {favorites.map((f) => (
        <MovieItem key={f.id} movie={f} />
      ))}
    </div>
  );
};

export default FavoritesPage;
