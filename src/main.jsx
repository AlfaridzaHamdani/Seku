import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import InsZone from "./Pages/InsZone";
import Products from "./Pages/Products";

const router = createBrowserRouter([
  {
    path: "/Seku/",
    element: <Home />,
  },
  {
    path: "/Seku/insZone",
    element: <InsZone />,
  },
  {
    path: "/Seku/products",
    element: <Products />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
