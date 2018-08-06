var axios = require('axios');

var APPID_QUERYSTRING = '&APPID=6233db89dbcfbfe8650e71e610a1b7ec';
var API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/';

var callGet = url => {
    return axios.get(url)
    .then(result => {
        return result.data;
    });
}

var apiClient = {
    fetchCurrentWeather: function(city){
        var url = API_ENDPOINT + 'weather?type=accurate&q=' + city + APPID_QUERYSTRING;
        return callGet(url);

    },
    fetchFiveDayForcast: function(city) {
        var url = API_ENDPOINT + 'forecast?type=accurate&cnt=8&q=' + city + APPID_QUERYSTRING;
        return callGet(url);
    }
};

module.exports = apiClient;