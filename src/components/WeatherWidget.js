import {getWindDirection, mapWMOToIconCode } from "../utils"
import React from "react";
import WeatherIcon from "./WeatherIcon"
import '../styles/components/Forecast.scss'

function WeatherWidget({key, date,weatherCode,tempMax, tempMin,windSpeed,windDirection}) {

    return (
        <div className="widget">
            <h3>{date}</h3>
            <div className="weather-info">
                <div className="day"></div>
                <div className="icon-temp">
                    <div className="icon">
                        <WeatherIcon
                            weatherNumber={weatherCode}
                        />
                    </div>
                    <div className="temperature">
                        {Math.round(tempMax)} °C
                    </div>
                    <div className="temperature">
                        {Math.round(tempMin)} °C
                    </div>
                </div>
                <div className="precipitation">
                    {Math.round(windSpeed)} km/h
                </div>
                <div className="precipitation">
                    {getWindDirection(windDirection)}
                </div>
            </div>
        </div>
    )
}

export default WeatherWidget;