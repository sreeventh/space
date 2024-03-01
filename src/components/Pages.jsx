import React from "react";
import "../pagination.css"

export default function Pages({totalPosts,postsPerPage,setCur}){
    let numPages = [];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        numPages.push(i);
    }

    return(
        <div className="pagination-container">
            {
                numPages.map((n)=>(
                    <button key={n} onClick={()=>setCur(n)} >{n}</button>
                ))
            }
        </div>
    )
}