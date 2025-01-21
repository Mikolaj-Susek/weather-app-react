import currentWeather from "./current-weather.json";
import longTermWeather from "./long-term-weather.json";

function getCurrentWeather(){
    return currentWeather;
}

function getDailyForecast(){
    return longTermWeather.daily;
}

export { getCurrentWeather, getDailyForecast };