import React from "react";

// Statische image -> importeren
import aalstImg from "../assets/aalst.jpg";

const MovieItem = ({ movie }) => {
  return (
    <div className="shadow-lg rounded-2xl overflow-clip transition duration-500 hover:scale-105">
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
