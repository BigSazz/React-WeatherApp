const React = require('react');

// let About = React.createClass({
//     render: function () {

//     }
// });

// Using stateless functional components
let About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p className="text-center">WeatherMania is an easy to use Web Application for getting weather temperature of any location around the world!</p>
            <ul>
                <li>
                    Framework powered by <a href="https://reactjs.org/">React</a>          
                </li>
                <li>
                    Weather Tech powered by <a href="https://openweathermap.org/">OpenWeatherMap</a>
                </li>
            </ul>
        </div>
    );
};

module.exports = About;