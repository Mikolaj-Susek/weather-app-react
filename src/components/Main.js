import React from 'react'
import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather.js"
import Forecast from "./Forecast"
import {getDailyForecast} from "../api"

function Main() {

    const data = getDailyForecast();

    console.log(data);

    return (
        <div className="Main">
            <CurrentWeather />
            <Forecast
                title="DAILY FORECAST FOR 7 DAYS"
                data={getDailyForecast()}
            />
        </div>
    )

}

export default Main;