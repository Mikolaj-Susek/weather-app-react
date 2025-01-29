import React from "react"
import "../styles/components/CurrentWeather.scss";
import { getWindDirection } from "../utils";
import WeatherIcon from "./WeatherIcon";
import Place from "./Place";

function CurrentWeather({ data }) {

    if (!data || !data.current) {
        return <div>Loading weather data...</div>;
    }

    const {
        temperature_2m,
        weather_code,
        relative_humidity_2m,
        wind_speed_10m,
        wind_direction_10m
    } = data.current;

    const otherInfoWidgets = [
        {
            id: 1,
            icon: "tornado",
            unit: "km/h",
            value: wind_speed_10m,
            name: "Wind speed"
        },
        {
            id: 2,
            icon: "compass",
            unit: "",
            value: getWindDirection(wind_direction_10m),
            name: "Wind direction"
        },
        {
            id: 3,
            icon: "moisture",
            unit: "%",
            value: relative_humidity_2m,
            name: "Humidity"
        }
    ];

    return (
        <div className="CurrentWeather">
            <div className="temperature">
                <div className="weather-icon">
                    <WeatherIcon weatherNumber={weather_code} />
                </div>
                <div className="value">
                    <div className="real">
                        {temperature_2m} °C
                    </div>
                </div>
                <Place />
            </div>
            <div className="other-infos">
                {otherInfoWidgets.map(({ id, icon, unit, value, name }) => (
                    <div key={id} className="widget">
                        <div className="widget-container">
                            <div className="info">
                                <i className={`bi bi-${icon}`}></i>
                            </div>
                            <div className="value">
                                {value} {unit}
                            </div>
                            <div className="name">{name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CurrentWeather;
