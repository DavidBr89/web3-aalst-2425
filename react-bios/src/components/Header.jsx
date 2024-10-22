import React from "react";

import logo from "../assets/logo.png";

import { MdHome } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-emerald-800 p-4 flex justify-between items-center">
      <img className="w-20" src={logo} />
      <MdHome className="text-white text-3xl" />
    </div>
  );
};

export default Header;
