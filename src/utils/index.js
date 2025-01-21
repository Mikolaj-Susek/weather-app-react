function getWindDirection(degrees) {
    const directions = [
        "N", "NNE", "NE", "ENE",
        "E", "ESE", "SE", "SSE",
        "S", "SSW", "SW", "WSW",
        "W", "WNW", "NW", "NNW"
    ];

    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
}

function mapWMOToIconCode(wmoCode) {
    const mapping = {
        0: 2, 1: 3, 2: 4, 3: 5, 45: 6, 48: 6, 51: 7, 53: 8, 55: 9, 61: 10, 63: 11, 65: 12, 66: 13, 67: 14,
        71: 15, 73: 16, 75: 17, 77: 18, 80: 19, 81: 20, 82: 21, 85: 22, 86: 23, 95: 24, 96: 25, 99: 26
    };

    return mapping[wmoCode] || 1;
}

export {mapWMOToIconCode, getWindDirection}