const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMsg = require('WeatherMsg');
const ErrorModal = require('ErrorModal');
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

        this.setState({
            isLoading: true,
            errorMessage: undefined
        });
        // Using Open Weather App Api 
        openWeatherApp.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp.temp,
                country: temp.country,
                isLoading: false
            });
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
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
        let {isLoading, temp, location, country, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>
            } else if (temp && location && country) {
                return <WeatherMsg location={location} temp={temp} country={country}/>;
            }
        };
        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        };
        return(
            <div>
                <h1 className="text-center">WeatherMania</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;