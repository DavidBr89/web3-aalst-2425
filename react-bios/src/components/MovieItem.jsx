import React from "react";

// Statische image -> importeren
import aalstImg from "../assets/aalst.jpg";

import { Link, useNavigate } from "react-router-dom";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useFavorites } from "../contexts/FavoritesContext";

const MovieItem = ({ movie }) => {
  // Hook om te kunnen navigeren via event listeners
  const navigate = useNavigate();

  const { toggleFavorite, favorites } = useFavorites();

  const isInFavorites = favorites.some((f) => f.id === movie.id);

  return (
    <div
      className="relative shadow-lg rounded-2xl overflow-clip transition duration-500 hover:scale-105 cursor-pointer"
      onClick={() => {
        // Navigeren naar de details pagina
        navigate(`/details/${movie.id}`);
      }}>
      <button
        // TODO: Als hem al in de favorites inzit -> bg-red-700 ZONIET -> bg-emerald-600
        className={`absolute top-4 right-4 text-white text-3xl rounded-full ${
          isInFavorites ? "bg-red-600" : "bg-emerald-600"
        } p-2`}
        onClick={(event) => {
          toggleFavorite(movie);

          // Het stoppen van de event bubbling - opgooien van de events
          event.stopPropagation();
        }}>
        {isInFavorites ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
      </button>

      <img
        src={new URL(`../assets/${movie.poster_path}`, import.meta.url)}
        alt="Campus aalst"
      />
      <div className="p-4">
        <p className="text-center font-bold uppercase">{movie.title}</p>
        <p className="font-thin text-center">{movie.genres.join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieItem;
