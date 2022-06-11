const request = require("request");

const geocode = (address, callback) => {
  var geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZ2Vla3ZpbmF5IiwiYSI6ImNsNDcwb2szdDAxODYzam84NWdlajd4emsifQ.GbW2UriklgGQ5SH06Celiw&limit=1`;

  request({ url: geocodeURL, json: true }, (err, response) => {
    if (err) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      console.log(response.body.features[0].center);
      const [long, lat] = response.body.features[0].center;
      console.log(response.body.features.location);
      callback(undefined, {
        lat,
        long,
      });
    }
  });
};

module.exports = geocode;
