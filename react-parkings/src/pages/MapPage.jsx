import React, { useEffect, useRef, useState } from "react";

import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import MapView from "../components/MapView";

import { useQuery } from "@tanstack/react-query";
import { fetchParkings } from "../api";

const MapPage = () => {
  const [coordinates, setCoordinates] = useState([51.4234, 4.4049]);
  //   Referentie aanmaken -> { current: ??? }
  const mapRef = useRef();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: fetchParkings,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <div>
      <MapContainer
        //   Koppeling te hebben met de mapRef -> om bijvoorbeeld methodes kunnen op te roepen
        ref={mapRef}
        center={coordinates}
        style={{ height: "500px", width: "100%" }}
        zoom={12}>
        <MapView />

        {data.data.results.map((p) => (
          <Marker
            key={p.id}
            position={[p.location.lat, p.location.lon]}
            title={p.name}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
