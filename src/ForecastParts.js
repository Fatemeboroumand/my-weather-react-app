import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon"


export default function ForecastParts(props) {


        function getDay(){
            let date = new Date(props.data.time * 1000)
            let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let day = date.getDay()
            return (days[day])
        }

        return(
        <div>
            <div className="WeatherForecast-day">{getDay()}</div>
            <WeatherIcon  code={props.data.condition.icon} size={36} />
            <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{Math.round(props.data.temperature.maximum)}°</span>
            <span className="WeatherForecast-temperature-min">{Math.round(props.data.temperature.minimum)}°</span>
            </div>

        </div>
    )
}