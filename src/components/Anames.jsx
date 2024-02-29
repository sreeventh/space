import React from "react";
import "./Dated.css";
import { Link } from "react-router-dom"

export default function Anames(props) {
    return (
        <div className="dcontainer">
                <p className="dinfo">{props.asname}</p>
        </div>
    )
}