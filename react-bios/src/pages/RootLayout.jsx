import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        {/* Dynamisch content aanpassen aan het opgegeven pad */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
