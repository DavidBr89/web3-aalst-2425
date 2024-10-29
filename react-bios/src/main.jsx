import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DarkModeContextProvider from "./contexts/DarkModeContext.jsx";
import Movies from "./components/Movies.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";

// Stap 1: Het aanmaken van een nieuwe browserRouter
const browserRouter = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
      // {
      //   path: "/details",
      //   element:
      // }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
    <DarkModeContextProvider />
  </StrictMode>
);
