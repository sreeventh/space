import React from "react";
import "./Op.css"

export default function Opcard(props) {
    return (
        <div className="opcontainer">
            <h2 className="heading">{props.aname}</h2>
            <p className="text">Nationality: {props.nationality}</p>
            <p className="text">Date of Birth: {props.dob}</p>
            <p className="text">Mission: {props.mm}</p>
            <p className="text">Spacecraft: {props.sx}</p>
        </div>
    )
}