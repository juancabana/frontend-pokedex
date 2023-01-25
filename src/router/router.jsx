import Home from "../pages/Home.jsx";
import Pokemon from "../pages/Pokemon.jsx";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
]);

export default router;
