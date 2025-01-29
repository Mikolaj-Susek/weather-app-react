import {useContext} from 'react'
import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather.js"
import Forecast from "./Forecast"
import WeatherContext from "../context/weather.context";
import Loader from "./Loader";

function Main() {

    const {loading, currentWeather, dailyForecast} = useContext(WeatherContext);

    return (
        <div className={'Main'}>
            {loading ? (
                <Loader />
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
    )

}

export default Main;