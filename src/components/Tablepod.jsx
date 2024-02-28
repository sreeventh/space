import React from "react";
import "./Tablepod.css"

export default function Tablepod(props) {

    return (
        <div className="apod-container">
            <img className="apod-image" src={props.picUrl} alt="Astronomy Picture of the Day" />
            <h2 className="apod-title">{props.picT}</h2>
            <p className="apod-info">Date: {props.picDate} | Author: {props.picA}</p>
            <p className="apod-description">
                {props.picDesc}
            </p>
        </div>
    )
}