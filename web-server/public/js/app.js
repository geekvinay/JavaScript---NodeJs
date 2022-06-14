let desc = document.querySelector(".desc");
let locationData = document.querySelector(".location");

function getWeather(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      desc.innerHTML = data.forecast;
      locationData.innerHTML = data.location;
    });
  });
}

let input = document.getElementById("loc");
let search = document.getElementById("search");

console.log(input, search);

search.addEventListener("click", (e) => {
  e.preventDefault();
  let url = "http://localhost:3000/weather?address=";
  let data = input.value;
  url = url + "" + data;
  desc.innerHTML = "Loading the data from server";
  locationData.innerHTML = "Loading the location from server";
  getWeather(url);
});
