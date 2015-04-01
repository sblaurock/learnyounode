var fs = require('fs');
var file = process.argv[2];

if(file) {
  fs.readFile(file, 'utf8', function(err, data) {
    console.log(data.toString().split('\n').length - 1);
  });
}
