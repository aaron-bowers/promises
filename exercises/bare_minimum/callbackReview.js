/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function (err, content) {
    if (err) {
      callback(err);
    } else {
      let splitSentences = content.split('\n');
      let firstLine = splitSentences[0];
      callback(null, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, (err, response, body) => {
  //console.log(response);
    if (err) {
      callback(err);
    }
    callback(null, response.statusCode);
  });
};
// https.get(url, (err, res) => {
//   if (err) {
//     console.log('err is:', err);
//     callback(err.statusCode);
//   } else {
//     console.log('statusCode:', res.statusCode);
//     callback(null, res.statusCode);
//   }
// });

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};