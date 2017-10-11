const React = require('react');

// let About = React.createClass({
//     render: function () {

//     }
// });

// Using stateless functional components
let About = (props) => {
    return (
        <div>
            <h3 className="text-center">About</h3>
            <p className="text-center">WeatherMania is an easy to use Web Application for getting weather temperature of any location around the world!</p>
            <p className="text-center">Powered by OpenWeatherApp</p>
        </div>
    );
};

module.exports = About;