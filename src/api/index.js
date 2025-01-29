import axios from 'axios';

export async function getWeatherInformations(theLatitude, theLongitude, isCurrent) {
    const params = {
        latitude: theLatitude,
        longitude: theLongitude,
        timezone: 'auto',
    };

    if (isCurrent) {
        params.current = 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m';
    } else {
        params.daily = 'weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant';
    }

    const options = {
        method: 'GET',
        url: 'https://api.open-meteo.com/v1/forecast',
        params: params,
        headers: { }
    };


    try {
        const response = await axios.request(options);
        console.log(" ## API IS WORKING ## ");
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
    }

}


