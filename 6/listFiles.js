var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, function(err, list) {
    var results = [];

    if(err) {
      return callback(err);
    }

    list = list.filter(function(item) {
      if(path.extname(item) === '.' + extension) {
	return true;
      }
    });

    return callback(null, list);
  });
};
