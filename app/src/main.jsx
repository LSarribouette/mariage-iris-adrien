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
import Theme from "./routes/theme";
import Lodging from "./routes/lodging";
import WeddingGifts from "./routes/wedding-gift";
import Programme from "./routes/program";
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
                        path: "/theme",
                        element: <Theme />,
                    },
                    {
                        path: "/programme",
                        element: <Programme />,
                    },
                    {
                        path: "/hebergement",
                        element: <Lodging />,
                    },
                    {
                        path: "/cadeaux-mariage",
                        element: <WeddingGifts />,
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