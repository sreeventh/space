import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import App from './App'


export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                {/* <Route path="/apod"/>
                <Route/> */}
            </Routes>
        </BrowserRouter>
    )
}