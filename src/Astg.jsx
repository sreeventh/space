import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Anames from "./components/Anames";


export default function Astg(){
    let {id} = useParams();
    const [ddd,setDdd] = useState([]);
    console.log(id);
    useEffect(()=>{
        async function getgr(){
            const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${id}&end_date=${id}&api_key=0CUMhfSaDToILcxkT6GPg5SQ6GHnPPJdSh5DBMI6`);
            const data = await response.json();
            const dd = data["near_earth_objects"][id];
            console.log(dd);
            setDdd(dd)
        }
        getgr();
    },[id])
    return(
        <>
            {ddd.map((a,index)=>(
                <Anames
                    key = {index}
                    asname = {a.name}
                    index={index}
                />
            ))}
           
        </>
    )
}