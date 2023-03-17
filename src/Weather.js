import React from "react";
import './Weather.css'

export default function Weather() {
    return (<div className="Weather">
        <div className="container" >
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search"  />
                        
                    </div>
                    <div className="col-3">
                        <input type="submit" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <h1>paris</h1>
            <ul>
                <li>time</li>
                <li>description</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img /> <span>temp</span><span>C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>humidity: %</li>
                        <li>Wind: km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>)
}