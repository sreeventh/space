import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Anames from "./components/Anames";
import Pages from "./components/Pages";


export default function Astg() {
    let { id } = useParams();
    const [ddd, setDdd] = useState([]);
    const [currpage, setCur] = useState(1);
    const postsPerPage = 5;
    console.log(id);
    useEffect(() => {
        async function getgr() {
            const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${id}&end_date=${id}&api_key=0CUMhfSaDToILcxkT6GPg5SQ6GHnPPJdSh5DBMI6`);
            const data = await response.json();
            const dd = data["near_earth_objects"][id];
            console.log(dd);
            setDdd(dd)
        }
        getgr();
    }, [id])

    const lastPostIndex = currpage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPostsDisplaying = ddd.slice(firstPostIndex, lastPostIndex);
    return (
        <div className="anta-regular">
            <h2 style={{ textAlign: "center", fontSize: "40px" }}>List of Asteroids Observed on {id}</h2>
            {currentPostsDisplaying.map((a, index) => (
                <Anames
                    key={index}
                    asname={a.name}
                    index={index}
                />
            ))}

            <div style={{marginLeft:"700px"}}>
                <Pages
                    totalPosts={ddd.length}
                    postsPerPage={postsPerPage}
                    setCur={setCur}
                />
            </div>

        </div>
    )
}