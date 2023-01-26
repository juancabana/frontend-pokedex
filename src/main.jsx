import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Router
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { PokemonContext, state } from "./contexts/pokemon.context.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonContext.Provider value={state}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </PokemonContext.Provider>
  </React.StrictMode>
);
