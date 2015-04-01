var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var extension = process.argv[3];

if(file) {
  fs.readdir(file, function(err, list) {
    list = list.forEach(function(item) {
      if(path.extname(item) === '.' + extension) {
        console.log(item);
      }
    });
  });
}
