## APIs



### MeteoSource

Weather icons zip file:
https://www.meteosource.com/documentation


### Nominatim API

Zapytanie o uzyskanie lokalizacji podanego miast lub miejsca.
```http request
https://nominatim.openstreetmap.org/search?q=Warszawa&format=json&limit=1
```

```json
[
    {
        "place_id": 296234672,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
        "osm_type": "relation",
        "osm_id": 170117,
        "lat": "36.1672559",
        "lon": "-115.148516",
        "class": "boundary",
        "type": "administrative",
        "place_rank": 16,
        "importance": 0.7126172021753994,
        "addresstype": "city",
        "name": "Las Vegas",
        "display_name": "Las Vegas, Clark County, Nevada, United States",
        "boundingbox": [
            "36.1295540",
            "36.3808406",
            "-115.4242845",
            "-115.0620660"
        ]
    }
]
```

### Open-Meteo API

Zakres kodów pogodowych 

- 0-3: Ogólne warunki nieba (bezchmurnie, pochmurnie).
- 45-48: Mgła i związane z nią zjawiska.
- 51-57: Mżawka, w tym marznąca mżawka.
- 61-67: Deszcz, w tym marznący deszcz.
- 71-77: Śnieg i śnieg ziarnisty.
- 80-86: Przelotne opady deszczu lub śniegu.
- 95-99: Burze, z opcją gradu.

Zapytanie dla akutalnej prognozy
```http request
https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&current_weather=true&current=temperature_2m
```
```json
{
"latitude": 50.057274,
"longitude": 19.949356,
"generationtime_ms": 0.056743621826171875,
"utc_offset_seconds": 0,
"timezone": "GMT",
"timezone_abbreviation": "GMT",
"elevation": 220.0,
"current_weather_units": {
"time": "iso8601",
"interval": "seconds",
"temperature": "°C",
"windspeed": "km/h",
"winddirection": "°",
"is_day": "",
"weathercode": "wmo code"
},
"current_weather": {
"time": "2025-01-20T19:15",
"interval": 900,
"temperature": 1.1,
"windspeed": 2.5,
"winddirection": 268,
"is_day": 0,
"weathercode": 3
}
}
```
