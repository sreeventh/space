import React,{useEffect,useState} from "react";
import "./components/Dated";
import Dated from "./components/Dated";
import Pages from "./components/Pages";

export default function Asteroid(){

    const [ddates,setDates] = useState([]);
    const [currentPage,setCur] = useState(1);
    const postPerPage = 5;
    
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
    
    const lastPostIndex = currentPage*postPerPage;
    const firstPostIndex = lastPostIndex-postPerPage;
    const currentPostsDisplaying = ddates.slice(firstPostIndex,lastPostIndex);
    // console.log(currentPostsDisplaying);

    return(
        <div className="anta-regular" style={{textAlign:"center"}}>
        <h2 className="dtitle" style={{fontSize:"40px"}}>Asteroids Date-wise</h2>
            {currentPostsDisplaying.map((a,index)=>(
                <Dated
                    key={index}
                    asdate = {a}
                />
            ))}
            <Pages
                totalPosts={ddates.length}
                postsPerPage={postPerPage}
                setCur={setCur}
            />
        </div>
    )
}