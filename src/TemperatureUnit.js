import React, { useState } from "react"

export default function TemperatureUnit(props) {
    const [unit, setUnit] =useState("celsius")

    function showFaren(event) {
        event.preventDefault();
        setUnit("faren")
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
if (unit === "celsius") {
    return (
        <div>
         <span className="temperature float-left">{props.celsius}</span><span className="unit"><a>°C</a> | <a onClick={showFaren}>°F</a></span>

        </div>
    )} else {
        return(
            <div>
         <span className="temperature float-left">{Math.round((props.celsius * 5/9) + 32)}</span><span className="unit"><a onClick={showCelsius}>°C</a> | <a onClick={showFaren}>°F</a></span>

            </div>
        )
    }
}