const APPID_QUERYSTRING = 'APPID=6233db89dbcfbfe8650e71e610a1b7ec';
const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5';

const callGet = async url => {
    const response = await fetch(url);
    return await response.json();
}

export function fetchCurrentWeather(city) {
    return callGet(`${API_ENDPOINT}/weather?type=accurate&q=${city}&${APPID_QUERYSTRING}`);
}

export function fetchFiveDayForcast(city) {
    return callGet(`${API_ENDPOINT}/forecast?type=accurate&cnt=8&q=${city}&${APPID_QUERYSTRING}`);
}