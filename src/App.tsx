import React from 'react';
import './App.css';
import {router} from "./services/router";
import {RouterProvider} from "react-router-dom";
import {decodeToken} from "react-jwt";

export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmRyZWVhb2xhcml1MTNAZ21haWwuY29tIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.OpdQb2KU7wcZb_zEHvx6FtsLC0ure8Ug3MKB4eEYzjI"

// @ts-ignore
export const decoded: decodedTokenType = decodeToken(token)

function App() {



    return (
        <RouterProvider router={router}/>
    );
}

export default App;
