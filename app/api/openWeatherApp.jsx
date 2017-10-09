const axios = require('axios');

const OPEN_WEATHER_APP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4dd38de5f0902b8162a3063f1ab4a65&units=imperial';


module.exports = {
    getTemp: function (location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_APP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then( function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return {
                    temp:res.data.main.temp,
                    country: res.data.sys.country
                }
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}

