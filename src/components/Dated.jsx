import React from "react";
import "./Dated.css";
import { Link } from "react-router-dom"

export default function Dated(props) {
    return (
        <div className="dcontainer">
            <Link style={{textDecoration:"none"}} to={`${props.asdate}`}>
                <p className="dinfo">{props.asdate}</p>
            </Link>
        </div>
    )
}