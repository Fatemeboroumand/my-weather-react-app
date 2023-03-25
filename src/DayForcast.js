import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"

import axios from 'axios';
import ForecasParts from "./ForecastParts"


export default function DayForcast(props) {
    let [loade, setLoade] = useState(false)
    let [forecast, setForecast] = useState(null)

    useEffect (() => {setLoade(false);}, [props.city])

    function forcastDays(response) {
        console.log(response.data)
        setLoade(true)
        setForecast(response.data.daily)
    }

    if (loade) {
        
    return (
        <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForcast, index) {
                if (index < 5) {
                    return(
          <div className="col" key={index}>
        <ForecasParts data={dailyForcast}/>
          </div> );} else {return null}
    })}
        </div>
      </div>
    )} else {
    let url=`https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=fc27d3cat0oef346a51ba4fd0ca6ded3&units=metric`
    axios.get(url).then(forcastDays);
return (null)
    }
}