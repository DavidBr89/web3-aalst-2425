import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ParkingsPage from "./pages/ParkingsPage.jsx";
import AddParkingPage from "./pages/AddParkingPage.jsx";
import MapPage from "./pages/MapPage.jsx";

// STAP 1: Navigeren

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <ParkingsPage />,
  },
  {
    path: "/add",
    element: <AddParkingPage />,
  },
  {
    path: "/map",
    element: <MapPage />,
  },
]);

// STAP 2: React Query toevoegen

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  </StrictMode>
);
