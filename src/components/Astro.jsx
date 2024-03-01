import React from "react";

export default function Astro(props) {
    return (
        <>
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
                    opacity:"80%"
                }}
                required
            />
        </>
    )
}