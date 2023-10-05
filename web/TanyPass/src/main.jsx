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
import QRcode from "./components/QRcode";
import Listaestu from "./components/Listaestu";

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
    path: "qrcode",
    element: <QRcode/>,
  }, 
  {
    path: "listaedu",
    element: <Listaestu/>,
  },

 
 
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);