import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Tales from "./routes/Tales.jsx";
import About from "./routes/About.jsx";
import FamiliarTale from "./routes/FamiliarTale.jsx";
import ScholarTale from "./routes/ScholarTale.jsx";
import ScholarCharacters from "./routes/ScholarCharacters.jsx";
import FamiliarCharacters from "./routes/FamiliarCharacters.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
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
        path: "/familiar-characters",
        element: <ScholarCharacters />,
    },
    {
        path: "/scholar-characters",
        element: <FamiliarCharacters />,
    },
    {
        path: "/familiar-tale",
        element: <FamiliarTale />,
    },
    {
        path: "/scholar-tale",
        element: <ScholarTale />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
