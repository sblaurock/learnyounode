var fs = require('fs');
var file = process.argv[2];
var buffer = null;

if(file) {
  buffer = fs.readFileSync(file);

  if(buffer) {
    console.log(buffer.toString().split('\n').length - 1);
  }
}
