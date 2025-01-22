import '../styles/components/Forecast.scss'
import WeatherWidget from "./WeatherWidget";
import HorizontallyScrollable from "./HorizontallyScrollable";

function Forecast({ title, data }) {

    return (
      <div className="Forecast">
          <div className="forecast-container">
              <h3>{title}</h3>
              <HorizontallyScrollable className='widget-container'>
                    {data.time.map((date, index) => (
                        <div key={index}>
                            <WeatherWidget
                                date={date}
                                weatherCode={data.weather_code[index]}
                                tempMax={data.temperature_2m_max[index]}
                                tempMin={data.temperature_2m_min[index]}
                                windSpeed={data.wind_speed_10m_max[index]}
                                windDirection={data.wind_direction_10m_dominant[index]}
                            />
                        </div>
                    ))}
              </HorizontallyScrollable>
          </div>
      </div>
    );
}


export default Forecast;