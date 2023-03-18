import React, { useState } from "react";
import './Weather.css'
import axios from 'axios';
import ShowTime from "./ShowTime"

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState (props.defaultCity)

function forecast(response) {
    console.log(response)
    setWeatherData(
        {ready: true,
       city:response.data.city,
    temp:response.data.temperature.current, 
humidity:response.data.temperature.humidity,
wind:response.data.wind.speed,
date: new Date(response.data.time *1000),
img:response.data.condition.icon_url,
description:response.data.condition.description}
    )
}

function changeCity(event) {
    setCity(event.target.value)
}
    

function handleSubmit(event) {
    event.preventDefault()
    let key = `fc27d3cat0oef346a51ba4fd0ca6ded3`
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`

    axios.get(url).then(forecast);


}

    if (weatherData.ready) {return (<div className="Weather">
        <div className="container" >
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={changeCity}  />
                        
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <h1>{city}</h1>
            <ul>
                <li><ShowTime currentDate={weatherData.date}/></li>
                <li>{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src={weatherData.img}/> <span>{Math.round(weatherData.temp)}</span><span>C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {Math.round(weatherData.humidity)} %</li>
                        <li>Wind: {Math.round(weatherData.wind)}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>)} else {
    let key = `fc27d3cat0oef346a51ba4fd0ca6ded3`
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`
    axios.get(url).then(forecast)


        return(<h1>loading</h1>)}
}