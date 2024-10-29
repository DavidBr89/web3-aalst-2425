import React, { useEffect, useState } from "react";

const StarwarsPage = () => {
  const [swMovies, setSwMovies] = useState();

  // OPTIE 1: fetch API

  const fetchSwMovies = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/films");
      const data = await response.json();

      setSwMovies(data);

      console.log("SWAPI:", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Dit is een side effect -> code dat React zelf niet in de hand heeft
    fetchSwMovies();
  }, []);

  return (
    <div>
      {swMovies.results.map((m) => (
        <p key={m.episode_id}>{m.title}</p>
      ))}
    </div>
  );
};

export default StarwarsPage;
