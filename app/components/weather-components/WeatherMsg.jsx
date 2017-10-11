const React = require('react');

// let WeatherMsg = React.createClass({
//     render: function () {

//     }
// });

let WeatherMsg = ({temp, location, country}) => {
    return (
        <h5 className="text-center">The temperature is {temp} in {location}, {country}</h5>
    );
}

module.exports = WeatherMsg;