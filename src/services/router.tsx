
import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />
    },
    {
        path: "/home",
        element: <Home />
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