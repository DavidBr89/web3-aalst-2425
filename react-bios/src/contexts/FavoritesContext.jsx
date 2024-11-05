import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    // Check -> minstens 1 object in de favorites waarbij id gelijk is aan de movie.id

    if (favorites.some((f) => f.id === movie.id)) {
      // Dat de film er al inzit
      favorites.filter((f) => f.id !== movie.id);
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites: favorites, toggleFavorite: toggleFavorite }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;

export const useFavorites = () => useContext(FavoritesContext);
