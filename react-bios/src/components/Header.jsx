import React from "react";

import logo from "../assets/logo.png";

import { MdHome, MdOutlineFavorite } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-emerald-800 p-4 flex justify-between items-center">
      <img className="w-20" src={logo} />

      {/* OPGELET: Ververst uw volledige pagina */}
      {/* <a href="/">Home</a>
      <a href="/details">Details</a> */}
      <div className="flex items-center gap-8 text-3xl">
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
      </div>
    </div>
  );
};

export default Header;
