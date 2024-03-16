import "./index.css";
import React from "react";
import Root from "./routes/Root.jsx";
import ReactDOM from "react-dom/client";
import Homepage from "./routes/Homepage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./routes/NotFound";
import AboutUs from "./routes/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
