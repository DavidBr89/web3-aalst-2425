import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

import Axios from "axios";
import { fetchParkings } from "../api";

const ParkingsPage = () => {
  const queryClient = useQueryClient();

  // queryClient.prefetchQuery(["fetchParkings"]);

  const { data, isLoading, isError, error, dataUpdatedAt, refetch } = useQuery({
    // QueryKey -> altijd een array meegeven -> Samengestelde keys kan maken
    queryKey: ["fetchParkings"],
    queryFn: fetchParkings,
    refetchInterval: 5 * 1000,
    initialData: {
      data: {
        results: [],
      },
    },
    // enabled: false,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <div>
      <p>Laatste update: {new Date(dataUpdatedAt).toLocaleString()}</p>
      {data.data.results.map((p) => (
        <div key={p.id}>
          <p>{p.name}</p>
          <p>
            {p.availablecapacity} / {p.totalcapacity}
          </p>
        </div>
      ))}
      <button onClick={refetch}>Haal data op!</button>
    </div>
  );
};

export default ParkingsPage;
