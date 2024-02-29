import React,{useEffect,useState} from "react";
import "./components/Dated";
import Dated from "./components/Dated";

export default function Asteroid(){

    const [ddates,setDates] = useState([]);

    useEffect(()=>{
        async function getAsDateDeets(){
            const response = await fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-01-01&api_key=0CUMhfSaDToILcxkT6GPg5SQ6GHnPPJdSh5DBMI6");
            const adata = await response.json();
            const ast_dates = adata["near_earth_objects"];
            const fdate =  Object.keys(ast_dates);
            console.log(fdate);
            setDates(fdate); 
        }
        getAsDateDeets();
    },[])


    return(
        <div>
        <h2 className="dtitle">Asteroids Date-wise</h2>
            {ddates.map((a,index)=>(
                <Dated
                    key={index}
                    asdate = {a}
                />
            ))}
        </div>
    )
}