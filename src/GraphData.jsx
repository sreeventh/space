import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import "./Gdata.css";


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
    const [sentinel,setSen] = useState(false);
    const [threat,setThreat] = useState(false);




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

            setSen(allData["is_sentry_object"]);
            setThreat(allData["is_potentially_hazardous_asteroid"]);
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
                backgroundColor: ['pink,aqua'],
                borderColor: ['pink','aqua'],
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
            <h1 style={{ textAlign: "center", fontSize: "50px" }}>Asteroid: {name}</h1>
            <div id="cont">
                <div style={{ backgroundColor: "black", width: "37%",height:"70%", borderRadius: "10px" ,opacity:"0.8",marginLeft:"70px"}}>
                    <Bar data={chartData} options={chartOptions} style={{opacity:"1"}}/>
                </div>
                <div style={{ backgroundColor: "black",color:"white",opacity:"0.75", width: "25%", height: "20%", borderRadius: "10px",padding:"25px 20px 25px 20px" ,marginRight:"250px",marginTop:'75px'}}>
                    <h2 style={{fontFamily:"monospace",fontStyle:"revert-layer",lineHeight:"40px"}}>
                        I am asteroid <span className="pink">{name}</span>, a rocky traveler drifting through the cosmos. On my closest approach date of <span className="pink">{cada}</span>, I ventured near the Earth, coming within a distance of <span className="pink">{mdis}</span>. Despite my sizable stature, measuring approximately <span className="pink">{maxd}</span> kilometers Maximum and <span className="pink">{mind}</span> kilometers Minimum in diameter, I posed <span className="pink">{threat ? 'an' : 'no' }</span> imminent threat to Earth. <span className="pink">{sentinel? null : 'Not'}</span> Classified as a sentinel, I am closely monitored by astronomers to ensure a thorough understanding of my trajectory and potential future interactions with our planet. Though my presence may spark intrigue, rest assured, I am but a passing visitor in the grand expanse of space.
                    </h2>
                </div>

            </div>
        </div>
    )
} 