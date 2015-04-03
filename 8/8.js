// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

var http = require('http');
var concatStream = require('concat-stream');
var url = process.argv[2];

if(url) {
  http.get(url, function(response) {
    response.pipe(concatStream(function(err, data) {
      if(err) {
	return err;
      }

      data = data.toString();

      console.log(data.length);
      console.log(data);
    }));
  });
}

// Tranditional
//if(url) {
  //http.get(url, function(response) {
    //var collected = [];

    //response.setEncoding("utf-8");

    //response.on("data", function(data) {
      //collected.push(data);
    //});

    //response.on("end", function() {
      //collected = collected.join('');

      //console.log(collected.length);
      //console.log(collected);
    //});

    //response.on("error", function(error) {
      //// Error
    //});
  //});
//}
