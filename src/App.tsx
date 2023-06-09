import React from 'react';
import './App.css';
import {router} from "./services/router";
import {RouterProvider} from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

    return (
        <>
            <RouterProvider router={router}/>
            <ToastContainer />
            <Footer/>
        </>
    );
}

export default App;
