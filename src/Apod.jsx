import React, { useEffect, useState } from "react";
import Tablepod from "./components/Tablepod";

import Pages from "./components/Pages";

export default function Apod() {
    const [picData, setPicdata] = useState([]);
    const postsperpage = 1;
    const [currentPage,setCur] = useState(1);

   

    useEffect(() => {
        async function getMonthPics() {
            const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=0CUMhfSaDToILcxkT6GPg5SQ6GHnPPJdSh5DBMI6&start_date=2024-02-01");
            const mdata = await response.json();
            console.log(mdata);
            // result is arr of objects
            setPicdata(mdata)
        }
        getMonthPics();
    }, []);

    const lastPostIndex = currentPage*postsperpage;
    const firstPostIndex = lastPostIndex-postsperpage;
    const currentPostsDisplaying = picData.slice(firstPostIndex,lastPostIndex);

    return (
        <div className="apod-container">
            {currentPostsDisplaying.map((a, index) => (
                <Tablepod
                    key={index}
                    picUrl={a.url}
                    picT={a.title}
                    picDesc={a.explanation}
                    picDate={a.date}
                    picA={a.copyright}
                />
            ))}
            <Pages
                totalPosts={picData.length}
                postsPerPage={postsperpage}
                setCur={setCur}
            />
        </div>
    );
}
