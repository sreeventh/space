import React, { useEffect, useState } from "react";
import Opcard from "./components/Opcard";
import { useLocation } from "react-router-dom";

export default function Astrobox() {
    const loc = useLocation();
    const [name_of_astro, setNameOf] = useState(null);
    const [jsdat, setJsdat] = useState({});
    
    const [nationality, setN] = useState("");
    const [dob, setDob] = useState("");
    const [mdate, setM] = useState("");
    const [sx, setSx] = useState("");

    // Set name_of_astro and jsdat only when loc.state changes and is not null,
    // and only if name_of_astro is currently null to avoid unnecessary updates
    useEffect(() => {
        if (loc.state !== null && name_of_astro === null) {
            setNameOf(loc.state.a);
            setJsdat(loc.state.data);
        }
    }, [loc, name_of_astro]);

    // Update nationality when name_of_astro or jsdat changes
    useEffect(() => {
        if (name_of_astro && jsdat[name_of_astro]) {
            console.log("astro name is : " + name_of_astro);
            console.log(jsdat[name_of_astro]);
            setN(jsdat[name_of_astro]["nationality"]);
            setM(jsdat[name_of_astro]["missions"][0]["mission_date"]);
            setSx(jsdat[name_of_astro]["missions"][0]["spacecraft"]);
            setDob(jsdat[name_of_astro]["date_of_birth"])
        }
    }, [name_of_astro]);





    

    return (
        <>
            <Opcard
                aname = {name_of_astro}
                nationality = {nationality}
                dob = {dob}
                mm = {mdate}
                sx = {sx}
            />
        </>
    )
}