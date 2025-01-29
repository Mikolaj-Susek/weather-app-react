import "../styles/components/Search.scss";
import {searchPlace} from "../api"
import {useContext, useState} from "react";
import WeatherContext from "../context/weather.context";


function Search() {


    const [text, setText] = useState('');
    const { setPlace } = useContext(WeatherContext);

    const handleSearch = async () => {

        if (!text.trim()) return;

        const result = await searchPlace(text);
        if (result && result.length > 0) {
            setPlace(result[0]);
        }
    }

    return <>
        <div className="search-container">
            <div className="search-icon">
                <i className="bi bi-search" onClick={handleSearch}></i>
            </div>
            <div className="search-input">
                <input
                    type="text"
                    name="search-city"
                    placeholder="Search city..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
            </div>

        </div>
    </>;
}

export default Search;