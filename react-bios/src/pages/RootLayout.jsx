import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div>
        {/* Dynamisch content aanpassen aan het opgegeven pad */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
