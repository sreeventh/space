import React from "react";
import '../Card.css'
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
            <div id="card" className="anta-regular">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <Link to={props.red}><button>{props.butt}</button></Link>
            </div>
    )
}