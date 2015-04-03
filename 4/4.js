// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

var fs = require('fs');
var file = process.argv[2];

if(file) {
  fs.readFile(file, 'utf8', function(err, data) {
    console.log(data.toString().split('\n').length - 1);
  });
}
