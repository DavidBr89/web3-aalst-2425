import React from "react";

// Statische image -> importeren
import aalstImg from "../assets/aalst.jpg";

import { Link, useNavigate } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

const MovieItem = ({ movie }) => {
  // Hook om te kunnen navigeren via event listeners
  const navigate = useNavigate();

  return (
    <div
      className="relative shadow-lg rounded-2xl overflow-clip transition duration-500 hover:scale-105 cursor-pointer"
      onClick={() => {
        // Navigeren naar de details pagina
        navigate(`/details/${movie.id}`);
      }}>
      <button
        className="absolute top-4 right-4 text-white text-3xl rounded-full bg-emerald-600 p-2 "
        onClick={(event) => {
          // Het stoppen van de event bubbling - opgooien van de events
          event.stopPropagation();
        }}>
        <MdFavorite />
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
