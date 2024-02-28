import React from "react";
import '../Card.css'

export default function Card(props) {
    return (
            <div id="card" className="anta-regular">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <button>{props.butt}</button>
            </div>
    )
}