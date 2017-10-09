const axios = require('axios');

module.exports = {
    viewWeather: (location) => {
        let encodedAddress = encodeURIComponent(location);
        let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAZ7SA5V59O68jltIsAhS8NbaJZo7Klxug`;
    
        axios.get(geocodeUrl).then((response) => {
            if (response.data.status === 'ZERO_RESULTS') {
                throw new Error('Unable to find that address');
            }
    
            let lat = response.data.results[0].geometry.location.lat;
            let lng = response.data.results[0].geometry.location.lng;
            let weatherUrl = `https://api.darksky.net/forecast/87a4d759b5335b388771cef0a66f4195/${lat},${lng}`;
            // console.log(response.data.results[0].formatted_address);
            return axios.get(weatherUrl);
        }).then((response) => {
            // let summary = response.data.currently.summary;
            // let location = location
            let temp = response.data.currently.temperature;
            // let result = {
            //     location: Location,
            //     temp: temp
            // }
            // console.log(JSON.stringify(result, undefined, 2));
            return temp;
    
        }).catch((e) => {
            if (e.code === 'ENOTFOUND') {
                console.log(`Unable to connect to API's servers`);
            } else {
                console.log(e.message);
            }
        });
    }
};