// Use request to fetch data from API endpoint (breed/siberian)
// http://api.thecatapi.com/v1/breeds/search


const request = require('request');

const fetchBreedDecs = function(input, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=sib" + input;

  request(url, (error, response, body) => {
    if (body === '[]') {
      callback('Error - Breed Not Found');

    } else if (error) {
      callback(error);

    } else {
      let data = JSON.parse(body);
      //console.log(typeof body)
      let catDesc = data[0].description;
      callback(null, catDesc);
  
    }
  });

};

module.exports = {fetchBreedDecs};

