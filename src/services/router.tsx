import {
    createBrowserRouter,
} from "react-router-dom";

import Trends from "../pages/Trends";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import SearchedLibrary from "../pages/SearchedLibrary";
import {albumType, artistType, trackType} from "../utils/Types";
import RandomPlaylist from "../pages/RandomPlaylist";


export const searchedResults: (artistType | albumType | trackType)[] = []

export const searchedResults2: (artistType | albumType | trackType)[] = []

export const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound/>
    },
    {
        path: "/trends",
        element: <Trends/>
    },
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },

    {
        path: "/searched",
        element: <SearchedLibrary searched={searchedResults}/>
    },

    {
        path: "/searched-tracks",
        element: <SearchedLibrary searched={searchedResults2}/>
    },
    {
        path: "/random-playlist",
        element: <RandomPlaylist/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
]);