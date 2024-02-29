import React from "react";
import { useParams } from "react-router-dom";

export default function GraphData(){
    let {name} = useParams();
    console.log(name);
    return(
        <>
            <h1> hello {name}</h1>
        </>
    )
} 