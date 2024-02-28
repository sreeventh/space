import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import App from './App'
import Apod from "./Apod";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/apod" element={<Apod/>}/>
            </Routes>
        </BrowserRouter>
    )
}