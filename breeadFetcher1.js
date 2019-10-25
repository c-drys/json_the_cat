const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = (breed, callback) => {
  request(url + breed, (error, response, body) => {

    if (error) {
      callback(error);

    } else if (body) {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null);
  
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
