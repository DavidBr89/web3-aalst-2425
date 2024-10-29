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
import DetailsPage from "./pages/DetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";

// Stap 1: Het aanmaken van een nieuwe browserRouter
const browserRouter = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
      {
        // Dynamisch id te kunnen gebruiken als parameter
        path: "details/:id",
        element: <DetailsPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
    <DarkModeContextProvider />
  </StrictMode>
);
