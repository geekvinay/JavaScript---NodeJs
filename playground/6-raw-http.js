const http = require("http");
var url = `http://api.weatherstack.com/current?access_key=84b9133b8df71d6b3fbd55d7969704ce&query=17.4,78.44`;

const request = http.request(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log(data);
  });
  res.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});
request.on("error", (error) => {
  console.log("An error ", error);
});

request.end();
