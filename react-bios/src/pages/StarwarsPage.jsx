import React, { useEffect, useState } from "react";

import Axios from "axios";

const StarwarsPage = () => {
  const [swMovies, setSwMovies] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // OPTIE 1: fetch API

  const fetchSwMovies = async () => {
    setIsLoading(true);
    try {
      // GET request
      const response = await fetch("https://swap.dev/api/films");
      const data = await response.json();

      // POST request
      // const postResponse = await fetch("https://swap.dev/api/films", {
      //   body: JSON.stringify({ fName: "David", lName: "Breckx" })
      // });

      setSwMovies(data);

      // console.log("SWAPI:", data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // OPTIE 2: Axios

  useEffect(() => {
    // Self invoking functions
    setIsLoading(true);
    (async () => {
      try {
        // GET request -> Axios
        const response = await Axios.get("https://swapi.dev/api/films");

        // POST request -> Axios

        // const postResponse = await Axios.post("https://swap.dev/api/films", {
        //   fName: "David",
        //   lName: "Breckx",
        // });

        setSwMovies(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // useEffect -> fetch API
  // useEffect(() => {
  //   // Dit is een side effect -> code dat React zelf niet in de hand heeft
  //   fetchSwMovies();
  // }, []);

  if (isLoading) {
    return <p className="animate-pulse">Loading...</p>;
  }

  if (error) {
    return <p>Er is een fout gebeurd.</p>;
  }

  return (
    <div>
      {swMovies.results.map((m) => (
        <p key={m.episode_id}>{m.title}</p>
      ))}
    </div>
  );
};

export default StarwarsPage;
