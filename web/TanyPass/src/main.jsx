import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App"
import Home from "./components/home";
import Senrecu from "./components/Senrecu";
import Qrcode from "./components/Qrcode";
import Listaesdu from "./components/Listaesdu";

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "recuperar",
    element:<Senrecu/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "/qrcode",
    element: <Qrcode/>,
  }, 
  {
    path: "/listaesdu",
    element: <Listaesdu/>,
  },

 
 
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);