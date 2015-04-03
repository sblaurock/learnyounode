// Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

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
