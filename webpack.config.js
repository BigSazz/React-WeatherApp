module.exports = {
    entry: 'app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            WeatherForm: 'app/components/weather-components/WeatherForm.jsx',
            WeatherMsg: 'app/components/weather-components/WeatherMsg.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            openWeatherApp: 'app/api/openWeatherApp.jsx',
            darkSkyApi: 'app/api/darkSkyApi.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};