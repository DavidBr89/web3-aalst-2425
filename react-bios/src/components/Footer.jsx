import React from "react";

import locations from "../utils/locations.json";

const Footer = () => {
  return (
    <div className="bg-emerald-800 p-4">
      {locations.map((l) => (
        <div key={l.id}>
          <p>{l.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
