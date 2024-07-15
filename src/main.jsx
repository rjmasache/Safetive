import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import About from "./routes/About.jsx";
import Tales from "./routes/Tales.jsx";

// Familiar Tale
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
import {
    startWandaTale,
    calmParentsTaleWanda,
    calmWandaTale,
    sadWandaTale,
    angryParentsTaleWanda,
    quietWandaTale,
    talkTeacherWandaTale,
} from "./assets/wandaFamiliarTale.js";

// Scholar tale
import ScholarCharacters from "./routes/ScholarCharacters.jsx";
import ScholarTaleParts from "./components/ScholarTaleParts.jsx";
import {
    badFriendScholarTale,
    bruceAcceptScholarTale,
    bruceHitScholarTale,
    bruceRejectScholarTale,
    bruceTalkTeacherScholarTale,
    goodFriendScholarTale,
    startBruceScholarTale,
} from "./assets/bruceScholarTale.js";
import {
    badFriendWandaScholarTale,
    goodFriendWandaScholarTale,
    startWandaScholarTale,
    wandaAcceptScholarTale,
    wandaHitScholarTale,
    wandaRejectScholarTale,
    wandaTalkTeacherScholarTale,
} from "./assets/wandaScholarTale.js";

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
    // Routes for Bruce familiar tale
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
            />
        ),
    },
    {
        path: "/familiar-tale-bruce-sad",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-bruce-sad`}
                tale={sadBruceTale}
            />
        ),
    },
    {
        path: "/familiar-tale-bruce-quiet",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-bruce-quiet`}
                tale={quietBruceTale}
            />
        ),
    },
    {
        path: "/familiar-tale-bruce-talk-teacher",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-bruce-talk-teacher`}
                tale={talkTeacherBruceTale}
            />
        ),
    },
    // Routes for Wanda familiar tale
    {
        path: "/familiar-tale-wanda",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-wanda`}
                tale={startWandaTale}
                firstLink={`/familiar-tale-wanda-calm-parents`}
                secondLink={`/familiar-tale-wanda-angry-parents`}
            />
        ),
    },
    {
        path: "/familiar-tale-wanda-calm-parents",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-wanda-calm-parents`}
                tale={calmParentsTaleWanda}
                firstLink={`/familiar-tale-wanda-sad`}
                secondLink={`/familiar-tale-wanda-calm`}
            />
        ),
    },
    {
        path: "/familiar-tale-wanda-angry-parents",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-wanda-angry-parents`}
                tale={angryParentsTaleWanda}
                firstLink={`/familiar-tale-wanda-quiet`}
                secondLink={`/familiar-tale-wanda-talk-teacher`}
            />
        ),
    },
    {
        path: "/familiar-tale-wanda-calm",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-wanda-calm`}
                tale={calmWandaTale}
            />
        ),
    },
    {
        path: "/familiar-tale-wanda-sad",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-wanda-sad`}
                tale={sadWandaTale}
            />
        ),
    },
    {
        path: "/familiar-tale-wanda-quiet",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-wanda-quiet`}
                tale={quietWandaTale}
            />
        ),
    },
    {
        path: "/familiar-tale-wanda-talk-teacher",
        element: (
            <FamiliarTaleParts
                path={`/familiar-tale-wanda-talk-teacher`}
                tale={talkTeacherWandaTale}
            />
        ),
    },

    // Bruce Scholar tale
    {
        path: "/scholar-characters",
        element: <ScholarCharacters />,
    },
    {
        path: "/scholar-tale-bruce",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-bruce"
                tale={startBruceScholarTale}
                firstLink={`/scholar-tale-bad-friend`}
                secondLink={`/scholar-tale-good-friend`}
            />
        ),
    },
    {
        path: "/scholar-tale-bad-friend",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-bad-friend"
                tale={badFriendScholarTale}
                firstLink={`/scholar-tale-bruce-hit`}
                secondLink={`/scholar-tale-bruce-talk-teacher`}
            />
        ),
    },
    {
        path: "/scholar-tale-bruce-hit",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-bruce-hit"
                tale={bruceHitScholarTale}
            />
        ),
    },
    {
        path: "/scholar-tale-bruce-talk-teacher",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-bruce-talk-teacher"
                tale={bruceTalkTeacherScholarTale}
            />
        ),
    },
    {
        path: "/scholar-tale-good-friend",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-good-friend"
                tale={goodFriendScholarTale}
                firstLink={`/scholar-tale-bruce-accept`}
                secondLink={`/scholar-tale-bruce-reject`}
            />
        ),
    },
    {
        path: "/scholar-tale-bruce-reject",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-bruce-reject"
                tale={bruceRejectScholarTale}
            />
        ),
    },
    {
        path: "/scholar-tale-bruce-accept",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-bruce-accept"
                tale={bruceAcceptScholarTale}
            />
        ),
    },

    // Wanda Scholar tale
    {
        path: "/scholar-characters",
        element: <ScholarCharacters />,
    },
    {
        path: "/scholar-tale-wanda",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-wanda"
                tale={startWandaScholarTale}
                firstLink={`/scholar-tale-bad-friend-wanda`}
                secondLink={`/scholar-tale-good-friend-wanda`}
            />
        ),
    },
    {
        path: "/scholar-tale-bad-friend-wanda",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-bad-friend-wanda"
                tale={badFriendWandaScholarTale}
                firstLink={`/scholar-tale-wanda-hit`}
                secondLink={`/scholar-tale-wanda-talk-teacher`}
            />
        ),
    },
    {
        path: "/scholar-tale-wanda-hit",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-wanda-hit"
                tale={wandaHitScholarTale}
            />
        ),
    },
    {
        path: "/scholar-tale-wanda-talk-teacher",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-wanda-talk-teacher"
                tale={wandaTalkTeacherScholarTale}
            />
        ),
    },
    {
        path: "/scholar-tale-good-friend-wanda",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-good-friend-wanda"
                tale={goodFriendWandaScholarTale}
                firstLink={`/scholar-tale-wanda-accept`}
                secondLink={`/scholar-tale-wanda-reject`}
            />
        ),
    },
    {
        path: "/scholar-tale-wanda-reject",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-wanda-reject"
                tale={wandaRejectScholarTale}
            />
        ),
    },
    {
        path: "/scholar-tale-wanda-accept",
        element: (
            <ScholarTaleParts
                path="/scholar-tale-wanda-accept"
                tale={wandaAcceptScholarTale}
            />
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
