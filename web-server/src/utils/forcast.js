const request = require("request");
let responseData;

const forecast = (data, callback) => {
  var url = `http://api.weatherstack.com/current?access_key=84b9133b8df71d6b3fbd55d7969704ce&query=`;
  url = url + `${data.lat},${data.long}`;
  console.log(url);
  request({ url: url, json: true }, (err, response) => {
    if (response.body.current) {
      console.log(response.body);
      const [temp, currTemp, desc] = [
        response.body.current.temperature,
        response.body.current.feelslike,
        response.body.current.weather_descriptions[0],
      ];
      callback(
        `${desc}, It is currently ${temp}°C out, but it feels like ${currTemp}°C`
      );
    }
  });
};

module.exports = forecast;
