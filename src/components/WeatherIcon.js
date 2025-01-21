import {mapWMOToIconCode} from "../utils"

function WeatherIcon({weatherNumber}) {

    const iconNumber = mapWMOToIconCode(weatherNumber);

    return (
        <img
            src={`${process.env.PUBLIC_URL}/dist/weather_icons/set04/big/${iconNumber}.png`}
            alt={iconNumber}
        />
    );
}


export default WeatherIcon;
