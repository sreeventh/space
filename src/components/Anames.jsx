import React from "react";
import "./Dated.css";
import { Link } from "react-router-dom"

export default function Anames(props) {
    return (
        <div className="dcontainer">
            <Link style={{textDecoration:"none"}} to={`${props.asname}`}>
                <p className="dinfo">{props.asname}</p>
            </Link>
        </div>
    )
}