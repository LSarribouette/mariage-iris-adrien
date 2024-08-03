import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/routes";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Location from "./routes/location";
import Lodging from "./routes/lodging";
import WeddingGift from "./routes/wedding-gift";
import Participation from "./routes/participation";
import OutfitsInspirations from "./routes/outfits-inspirations";
import PresenceConfirmation from "./routes/presence-confirmation";
import Todo from "./routes/todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/lieu",
            element: <Location />,
          },
          {
            path: "/hebergement",
            element: <Lodging />,
          },
          {
            path: "/cadeau-mariage",
            element: <WeddingGift />,
          },
          {
            path: "/participation",
            element: <Participation />,
          },
          {
            path: "/inspirations-tenues",
            element: <OutfitsInspirations />,
          },
          {
            path: "/todo",
            element: <Todo />,
          },
          {
            path: "/confirmation-presence",
            element: <PresenceConfirmation />,
          },
        ],
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);