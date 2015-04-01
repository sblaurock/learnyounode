// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

var fs = require('fs');
var file = process.argv[2];
var buffer = null;

if(file) {
  buffer = fs.readFileSync(file);

  if(buffer) {
    console.log(buffer.toString().split('\n').length - 1);
  }
}
