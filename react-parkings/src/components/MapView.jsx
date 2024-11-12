import React, { useEffect } from "react";
import { TileLayer, useMap } from "react-leaflet";

const MapView = () => {
  //   Custom hook vanuit het ReactLeaflet package
  const map = useMap();

  useEffect(() => {
    // Om de locatie op de map weer te geven via de Map API.
    // map.locate({ setView: true });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        map.flyTo([position.coords.latitude, position.coords.longitude]);
      },
      (err) => {}
    );
  }, [map]);

  console.log(map);

  return (
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
  );
};

export default MapView;
