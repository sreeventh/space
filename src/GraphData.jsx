import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';


export default function GraphData() {
    Chart.register(...registerables);
    let { id, index } = useParams();
    // console.log(name);
    // console.log(id);
    const [name, setName] = useState(null);
    const [mdis, setMdis] = useState(null);
    const [cada, setCada] = useState(null);
    const [maxd, setMaxd] = useState(null);
    const [mind, setMind] = useState(null);




    useEffect(() => {
        async function getgr() {
            const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${id}&end_date=${id}&api_key=0CUMhfSaDToILcxkT6GPg5SQ6GHnPPJdSh5DBMI6`);
            const data = await response.json();
            const dd = data["near_earth_objects"][id][index]["name"];
            // console.log(dd);
            setName(dd)
            const allData = data["near_earth_objects"][id][index];
            console.log(allData);

            setCada(allData["close_approach_data"][0]["close_approach_date_full"]);
            // console.log(allData["close_approach_data"][0]["miss_distance"]["kilometers"]); 
            setMdis(allData["close_approach_data"][0]["miss_distance"]["kilometers"]);

            setMind(allData["estimated_diameter"]["kilometers"]["estimated_diameter_min"]);
            setMaxd(allData["estimated_diameter"]["kilometers"]["estimated_diameter_max"])
        }
        getgr();
    }, [id, index])


    // Extracting relevant data
    const minDiameter = mind;
    const maxDiameter = maxd;

    

    // Chart.js data object
    const chartData = {
        labels: ['Minimum Diameter', 'Maximum Diameter'],
        datasets: [
            {
                label: 'Asteroid Size (kilometers)',
                data: [minDiameter, maxDiameter],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1
            }
        ]
    };

    // Chart.js options object
    const chartOptions = {
        indexAxis: 'y',
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Estimated Diameter (kilometers)'
                }
            }
        }
    };





    return (
        <div className='anta-regular'>
            <h1 style={{textAlign:"center",fontSize:"50px"}}>Asteroid: {name}</h1>
            <div style={{ backgroundColor: "white", width: "25%", height: "20%", borderRadius: "10px" }}>
                <Bar data={chartData} options={chartOptions} />
            </div>
            <div>

            </div>
        </div>
    )
} 