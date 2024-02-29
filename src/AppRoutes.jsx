import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import App from './App'
import Apod from "./Apod";
import Asteroid from "./Asteroid";
import Astg from "./Astg";
export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/apod" element={<Apod/>}/>
                <Route path="/asteroid" element={<Asteroid/>}/>
                <Route path="/asteroid/:id" element={<Astg/>}/>
            </Routes>
        </BrowserRouter>
    )
}