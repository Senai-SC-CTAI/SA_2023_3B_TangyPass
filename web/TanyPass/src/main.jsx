import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App"
import index from "./components/index";
import Senrecu from "./components/Senrecu";

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <index/>,
  },

  {
    path: "recuperar",
    element:<Senrecu/>,
  },
 
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);