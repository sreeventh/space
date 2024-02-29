import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GraphData(){
    let {id,index} = useParams();
    // console.log(name);
    // console.log(id);
    const [name,setName] = useState(null);
    useEffect(()=>{
        async function getgr(){
            const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${id}&end_date=${id}&api_key=0CUMhfSaDToILcxkT6GPg5SQ6GHnPPJdSh5DBMI6`);
            const data = await response.json();
            const dd = data["near_earth_objects"][id][index]["name"];
            console.log(dd);
            setName(dd)
            const allData = data["near_earth_objects"][id][index]
            console.log(allData);
        }
        getgr();
    },[id,index])

    return(
        <>
            <h1> hello Asteroid: {name}</h1>

        </>
    )
} 