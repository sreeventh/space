import React, { useState,useEffect } from "react";

export default function Astro(props) {
    const [vis, setVis] = useState(false)

    function handleCustomKey(event) {
        if (event.key === "y") {
            setVis(true);
        }
        if(event.key==="x"){
            setVis(false)
        }
    }
    console.log(vis);
    useEffect(() => {
        // Add event listeners when the component mounts
        document.addEventListener("keydown", handleCustomKey);

        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            document.removeEventListener("keydown", handleCustomKey);
        };
    }, []);
    return (
        <>
            {vis && (

                <input
                    type="text"
                    onChange={props.handleInputChange}
                    onKeyDown={props.handleKeyPress}
                    value={props.Astroname}
                    placeholder="Enter Astronaut"
                    style={{
                        width: "400px",
                        height: "60px",
                        padding: "20px",
                        marginBottom: "10px",
                        marginTop: "100px",
                        marginLeft: "600px",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#121212", // Darker background color
                        color: "#ffffff", // White text color
                        outline: "none",
                        fontSize: "1.5em",
                        opacity: "80%"
                    }}
                    required
                />
            )}
        </>
    )
}