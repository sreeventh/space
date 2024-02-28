import React, { useEffect, useState } from "react";
import Tablepod from "./components/Tablepod";
import "./pagination.css"; // Import CSS for pagination styles

export default function Apod() {
    const [picData, setPicdata] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = picData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <div className="apod-container">
            {currentItems.map((a, index) => (
                <Tablepod
                    key={index}
                    picUrl={a.url}
                    picT={a.title}
                    picDesc={a.explanation}
                    picDate={a.date}
                    picA={a.copyright}
                />
            ))}
            <div className="pagination-container">
                {Array.from({ length: Math.ceil(picData.length / itemsPerPage) }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
                ))}
            </div>
        </div>
    );
}
