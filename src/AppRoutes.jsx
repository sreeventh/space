import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import App from './App'
import Apod from "./Apod";
import Asteroid from "./Asteroid";
import Astg from "./Astg";
import GraphData from "./GraphData";
import Astrobox from "./Astrobox";
export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/apod" element={<Apod/>}/>
                <Route path="/abox" element={<Astrobox/>}/>
                <Route path="/asteroid" element={<Asteroid/>}/>
                <Route path="/asteroid/:id" element={<Astg/>}></Route>
                <Route path="/asteroid/:id/:index" element={<GraphData/>}/>
            </Routes>
        </BrowserRouter>
    )
}