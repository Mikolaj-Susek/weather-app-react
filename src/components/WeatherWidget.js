import {getWindDirection, mapWMOToIconCode } from "../utils"
import React from "react";
import WeatherIcon from "./WeatherIcon"
import '../styles/components/Forecast.scss'

function WeatherWidget({date,weatherCode,tempMax, tempMin,windSpeed,windDirection}) {


    const formattedDate = new Intl.DateTimeFormat(
        'en-US',
        {
            day: "2-digit",
            month: 'short'
        }
    ).format(new Date(date));


    const dayName = new Intl.DateTimeFormat(
        'en-US',
        {
            weekday: 'long'
        }
    ).format(new Date(date));

    return (
        <div className="widget">
            <h3>{formattedDate}</h3>
            <div className="weather-info">
                <div className="day">{dayName}</div>
                <div className="icon-temp">
                    <div className="icon">
                        <WeatherIcon weatherNumber={weatherCode}/>
                    </div>
                    <div className="temperature">
                        <div className="max">
                            {Math.round(tempMax)} °C
                        </div>
                        <div className="min">
                            {Math.round(tempMin)} °C
                        </div>
                    </div>
                </div>
                <div className="precipitation">
                    {Math.round(windSpeed)} km/h
                </div>
                <div className="wind">
                    <div className="speed">
                        {getWindDirection(windDirection)}
                    </div>
                    <div className="dir" style={{ transform: `rotate(${windDirection-45}deg)` }}>
                        <i className="bi bi-send-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherWidget;