// * Base
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// * Styles
import "./styles/normalize.css";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";

// * Router
import router from "./pages/routes.jsx";

// * Render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
