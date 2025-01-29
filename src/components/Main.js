import {useContext} from 'react'
import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather.js"
import Forecast from "./Forecast"
import WeatherContext from "../context/weather.context";

function Main() {

    const {loading, currentWeather, dailyForecast} = useContext(WeatherContext);

    return (
        <div className={'Main'}>
            <div className='content-container'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <CurrentWeather
                            data={currentWeather}
                        />
                        <Forecast
                            title="DAILY FORECAST FOR 7 DAYS"
                            data={dailyForecast}
                        />
                    </>
                )}
            </div>
        </div>
    )

}

export default Main;