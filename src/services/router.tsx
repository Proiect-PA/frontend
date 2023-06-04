
import {
    createBrowserRouter,
} from "react-router-dom";

import Trends from "../pages/Trends";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />
    },
    {
        path: "/trends",
        element: <Trends />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);