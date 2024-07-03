import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tales from "./routes/Tales.jsx";
import About from "./routes/About.jsx";
import Characters from "./routes/Characters.jsx";
import FamiliarTale from "./routes/FamiliarTale.jsx";
import FamiliarTaleParts from "./components/FamiliarTaleParts.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/tales",
        element: <Tales />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/characters",
        element: <Characters />,
    },
    {
        path: "/familiar-tale",
        element: <FamiliarTale />,
    },

    {
        path: "/familiar-tale-part-1",
        element: <FamiliarTaleParts />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
