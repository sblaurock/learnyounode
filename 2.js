var arguments = process.argv.slice(2, process.argv.length);
var sum = null;

arguments.forEach(function(argument) {
  sum += +argument;
});

console.log(sum);
