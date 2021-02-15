const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=14d5f35a22ec33faf510815bfdf0cdef&query=' + latitude + ',' + longitude;

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees outside. It feels like ' + body.current.feelslike + ' degrees. There is a ' + body.current.precip + '% chance of rain. The humidity is ' + body.current.humidity + "%.");
        }
    })
}

module.exports = forecast;