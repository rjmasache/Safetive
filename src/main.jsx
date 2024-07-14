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
import FamiliarTaleParts from "./components/FamiliarTaleParts.jsx";
import {
    startBruceTale,
    calmParentsTale,
    calmBruceTale,
    sadBruceTale,
    angryParentsTale,
    talkTeacherBruceTale,
    quietBruceTale,
} from "./assets/bruceFamiliarTale.js";
// import ScholarTale from "./routes/ScholarTale.jsx";
// import ScholarCharacters from "./routes/ScholarCharacters.jsx";

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
        element: (
            <FamiliarTaleParts
                path="/familiar-tale-bruce"
                tale={startBruceTale}
                firstLink={`/familiar-tale-bruce-calm-parents`}
                secondLink={`/familiar-tale-bruce-angry-parents`}
            />
        ),
    },
    {
        path: "/familiar-tale-bruce-calm-parents",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-bruce-calm-parents`}
                tale={calmParentsTale}
                firstLink={`/familiar-tale-bruce-calm`}
                secondLink={`/familiar-tale-bruce-sad`}
            />
        ),
    },
    {
        path: "/familiar-tale-bruce-angry-parents",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-bruce-angry-parents`}
                tale={angryParentsTale}
                firstLink={`/familiar-tale-bruce-quiet`}
                secondLink={`/familiar-tale-bruce-talk-teacher`}
            />
        ),
    },
    {
        path: "/familiar-tale-bruce-calm",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-bruce-calm`}
                tale={calmBruceTale}
                firstLink={`/familiar-tale-bruce-calm`}
                secondLink={`/familiar-tale-bruce-sad`}
            />
        ),
    },
    {
        path: "/familiar-tale-bruce-sad",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-bruce-sad`}
                tale={sadBruceTale}
                firstLink={`/familiar-tale-bruce-calm`}
                secondLink={`/familiar-tale-bruce-sad`}
            />
        ),
    },
    {
        path: "/familiar-tale-bruce-quiet",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-bruce-calm`}
                tale={quietBruceTale}
                firstLink={`/familiar-tale-bruce-calm`}
                secondLink={`/familiar-tale-bruce-sad`}
            />
        ),
    },
    {
        path: "/familiar-tale-bruce-talk-teacher",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-bruce-calm`}
                tale={talkTeacherBruceTale}
                firstLink={`/familiar-tale-bruce-calm`}
                secondLink={`/familiar-tale-bruce-sad`}
            />
        ),
    },
    {
        path: "/familiar-tale-wanda",
        element: <FamiliarTaleParts />,
    },
    {
        path: "/familiar-tale-wanda-calm-parents",
        element: <FamiliarTaleParts />,
    },
    {
        path: "/familiar-tale-wanda-angry-parents",
        element: <FamiliarTaleParts />,
    },
    {
        path: "/familiar-tale-wanda-calm",
        element: <FamiliarTaleParts />,
    },
    {
        path: "/familiar-tale-wanda-sad",
        element: <FamiliarTaleParts />,
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
