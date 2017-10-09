const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMsg = require('WeatherMsg');
const openWeatherApp = require('openWeatherApp');
const darkSkyApi = require('darkSkyApi');

let Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        let that = this;

        this.setState({isLoading: true});
        // Using Open Weather App Api 
        openWeatherApp.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp.temp,
                country: temp.country,
                isLoading: false
            });
        }, function (errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });
        // Trying to use Dark Sky Api
        // darkSkyApi.viewWeather(location).then(function (temp) {
        //     that.setState({
        //         isLoading: false,
        //         location: location,
        //         temp: temp
        //     });
        // }, function (err) {
        //     that.setState({isLoading: false});
        //     alert(err);
        // });
    },
    render: function () {
        let {isLoading, temp, location, country} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>
            } else if (temp && location && country) {
                return <WeatherMsg location={location} temp={temp} country={country}/>;
            }
        };
        
        return(
            <div>
                <h1>WeatherMania</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;