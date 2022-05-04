/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function (err, content) {
      if (err) {
        return reject(err);
      } else {
        let splitSentences = content.split('\n');
        let firstLine = splitSentences[0];
        return resolve(firstLine);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      //console.log(response);
      if (err) {
        return reject(err);
      }
      return resolve(response.statusCode);
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
