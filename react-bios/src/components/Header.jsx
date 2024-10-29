import React from "react";

import logo from "../assets/logo.png";

import { MdHome, MdOutlineFavorite } from "react-icons/md";
import { FaJedi } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-emerald-800 p-4 flex justify-between items-center">
      <img className="w-20" src={logo} />

      {/* OPGELET: Ververst uw volledige pagina */}
      {/* <a href="/">Home</a>
      <a href="/details">Details</a> */}
      <div className="flex items-center gap-8 text-3xl">
        {/* TODO: Maak van elke NavLink component een StyledNavlink component - hergebruik van de styling */}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white underline underline-offset-4"
              : "text-emerald-700"
          }
          to="/">
          <MdHome />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white underline underline-offset-4"
              : "text-emerald-600"
          }
          to="/favorites">
          <MdOutlineFavorite />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white underline underline-offset-4"
              : "text-emerald-600"
          }
          to="/starwars">
          <FaJedi />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
