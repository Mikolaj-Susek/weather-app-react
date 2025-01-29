import { useContext} from "react";
import WeatherContext from "../context/weather.context";

function Place() {

    const { place } = useContext(WeatherContext);

    const full_name = (place.display_name)
    const tokens = full_name.split(', ');

    const city = tokens[0];
    const country = tokens[tokens.length -1];

    return (
        <div className="Place">
            <div className="city">{city}</div>
            <div className="country">{country}</div>
        </div>
    )
}

export default Place;