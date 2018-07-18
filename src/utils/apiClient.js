var axios = require('axios');

var APPID_QUERYSTRING = '&APPID=6233db89dbcfbfe8650e71e610a1b7ec';
var API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/';

var apiClient = {
    fetchCurrentWeather: function(city, callBack){
        var url = API_ENDPOINT + 'weather?type=accurate&q=' + city + APPID_QUERYSTRING;
        axios.get(url)
            .then(function(result){
                callBack(result.data);
            });
    },
    fetchFiveDayForcast: function(city) {
        var url = API_ENDPOINT + 'forecast/hourly?type=accurate&cnt=5&q=' + city + APPID_QUERYSTRING;
        axios.get(url)
            .then(function(result){
                console.log(result);
            });
    }

};

module.exports = apiClient;