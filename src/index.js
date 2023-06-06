import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/signin",
        element: <Signin />
      }
    ]
  }
]);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
