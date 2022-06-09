const request = require("request");

const url = `http://api.weatherstack.com/current?access_key=84b9133b8df71d6b3fbd55d7969704ce&query=17.349045,78.562489`;

request({ url: url, json: true }, (err, response) => {
  //   console.log(response.body.current);
  const [temp, currTemp, desc] = [
    response.body.current.temperature,
    response.body.current.feelslike,
    response.body.current.weather_descriptions[0],
  ];
  console.log(
    `${desc}, It is currently ${temp}°C out, but it feels like ${currTemp}°C`
  );
});
