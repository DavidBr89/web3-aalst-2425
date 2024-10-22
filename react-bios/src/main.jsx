import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DarkModeContextProvider from "./contexts/DarkModeContext.jsx";
import Movies from "./components/Movies.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      {/* <App /> */}
      <Header />
      <Movies />
      <Footer />
    </DarkModeContextProvider>
  </StrictMode>
);
