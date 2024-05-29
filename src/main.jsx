import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DocumentPage from "./components/document/DocumentPage";
import FifthMeeting from "./components/document/FifthMeeting";
import FirstMeeting from "./components/document/FirstMeeting";
import FourthMeeting from "./components/document/FourthMeeting";
import SecondMeeting from "./components/document/SecondMeeting";
import ThirdMeeting from "./components/document/ThirdMeeting";
import "./index.css";
import AboutUs from "./routes/AboutUs";
import Contact from "./routes/Contact";
import Contract from "./routes/Contract";
import Document from "./routes/Document";
import Homepage from "./routes/Homepage.jsx";
import NotFound from "./routes/NotFound";
import Project from "./routes/Project";
import Root from "./routes/Root.jsx";

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
      {
        path: "contract",
        element: <Contract />,
      },
      {
        path: "document",
        element: <Document />,
        children: [
          {
            path: "",
            element: <DocumentPage />,
          },
          {
            path: "first-meeting",
            element: <FirstMeeting />,
          },
          {
            path: "second-meeting",
            element: <SecondMeeting />,
          },
          {
            path: "third-meeting",
            element: <ThirdMeeting />,
          },
          {
            path: "fourth-meeting",
            element: <FourthMeeting />,
          },
          {
            path: "fifth-meeting",
            element: <FifthMeeting />,
          }
        ],
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
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
