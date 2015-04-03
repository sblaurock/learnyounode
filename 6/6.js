// Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.

var listFiles = require('./listFiles');
var directory = process.argv[2];
var extension = process.argv[3];

listFiles(directory, extension, function(err, data) {
  if(err) {
    return err;
  }

  console.log(data.join('\n'));
});
