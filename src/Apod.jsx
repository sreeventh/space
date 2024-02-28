import React,{useEffect,useState} from "react";
import Tablepod from "./components/Tablepod";

export default function Apod() {

    const [picData,setPicdata] = useState([]);

    useEffect(()=>{
        
        async function getMonthPics() {
            const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=0CUMhfSaDToILcxkT6GPg5SQ6GHnPPJdSh5DBMI6&start_date=2024-02-01");
            const mdata = await response.json();
            console.log(mdata);
            // result is arr of objects
            setPicdata(mdata)
        }
        getMonthPics();
    },[])
    return (
        <>
            {picData.map((a, index) => (
                <Tablepod
                    key={index} // Add a unique key for each iteration
                    picUrl={a.url}
                    picT={a.title}
                    picDesc={a.explanation}
                    picDate={a.date}
                    picA={a.copyright}
                />
            ))}
        </>
    )
}