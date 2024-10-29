import React from "react";

import logo from "../assets/logo.png";

import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-emerald-800 p-4 flex justify-between items-center">
      <img className="w-20" src={logo} />
      <MdHome className="text-white text-3xl" />

      {/* OPGELET: Ververst uw volledige pagina */}
      {/* <a href="/">Home</a>
      <a href="/details">Details</a> */}

      <Link to="/">Home</Link>
      <Link to="/details">Details</Link>
    </div>
  );
};

export default Header;
