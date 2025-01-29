import {createContext, useEffect, useState} from 'react';
import {DEFAULT_PLACE} from "../utils";
import {getWeatherInformations} from "../api";


const WeatherContext = createContext();

function WeatherProvider({children}) {

    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [dailyForecast, setDailyForecast] = useState({});

    useEffect(() => {
        async function _getWeatherData() {
            setLoading(true);

            const cw = await getWeatherInformations(place.lat, place.lon, true);


            const dw = await getWeatherInformations(place.lat, place.lon, false);


            setCurrentWeather(cw);
            setDailyForecast(dw);

            setLoading(false);
        }
        _getWeatherData();
    }, [place]);

    return (
        <WeatherContext.Provider value={{place, loading, currentWeather, dailyForecast}}>
            {children}
        </WeatherContext.Provider>
    )
}

export {WeatherProvider}
export default WeatherContext;