import React from 'react';
import './App.css';
import {router} from "./services/router";
import {RouterProvider} from "react-router-dom";
import {decodeToken} from "react-jwt";
import Footer from "./components/Footer";

export const token = localStorage.getItem("token")

// @ts-ignore
export const decoded: decodedTokenType = decodeToken(token)


function App() {

    return (
        <>
            <RouterProvider router={router}/>
            <Footer/>
        </>
    );
}

export default App;
