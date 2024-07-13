import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import About from "./routes/About.jsx";
import Tales from "./routes/Tales.jsx";
import FamiliarCharacters from "./routes/FamiliarCharacters.jsx";
import FamiliarTaleBruce from "./routes/FamiliarTaleBruce.jsx";
import FamiliarTaleWanda from "./routes/FamiliarTaleWanda.jsx";
// import ScholarTale from "./routes/ScholarTale.jsx";
// import ScholarCharacters from "./routes/ScholarCharacters.jsx";
import FamiliarTaleOptions from "./components/FamiliarTaleOptions.jsx";

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
        element: <FamiliarCharacters />,
    },
    {
        path: "/familiar-tale-bruce",
        element: <FamiliarTaleBruce />,
    },
    {
        path: "/familiar-tale-bruce-calm-parents",
        element: <FamiliarTaleOptions />,
    },
    {
        path: "/familiar-tale-bruce-angry-parents",
        element: <FamiliarTaleOptions />,
    },
    {
        path: "/familiar-tale-bruce-calm",
        element: <FamiliarTaleOptions />,
    },
    {
        path: "/familiar-tale-bruce-sad",
        element: <FamiliarTaleOptions />,
    },
    {
        path: "/familiar-tale-wanda",
        element: <FamiliarTaleWanda />,
    },
    {
        path: "/familiar-tale-wanda-calm-parents",
        element: <FamiliarTaleOptions />,
    },
    {
        path: "/familiar-tale-wanda-angry-parents",
        element: <FamiliarTaleOptions />,
    },
    {
        path: "/familiar-tale-wanda-calm",
        element: <FamiliarTaleOptions />,
    },
    {
        path: "/familiar-tale-wanda-sad",
        element: <FamiliarTaleOptions />,
    },

    // {
    //     path: "/scholar-tale",
    //     element: <ScholarTale />,
    // },
    // {
    //     path: "/scholar-characters",
    //     element: <ScholarCharacters />,
    // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
