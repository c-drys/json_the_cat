// Use request to fetch data from API endpoint (breed/siberian)
// http://api.thecatapi.com/v1/breeds/search


const request = require('request');

const fetcher = function(input) {
  // const url = "https://api.thecatapi.com/v1/breeds/search?q=sib";
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + input;

  request(url, (error, response, body) => {
    if (body === '[]') {
      console.log('Error - Breed Not Found');

    } else if (error) {
    console.log('Error - URL issue');

    } else {
    //console.log(typeof body)
      const data = JSON.parse(body);
      let catDesc = data[0].description;
      console.log(catDesc);
    }
  
  });
};

const url = process.argv[2];
fetcher(url);
