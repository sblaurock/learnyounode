// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

var arguments = process.argv.slice(2, process.argv.length);
var sum = null;

arguments.forEach(function(argument) {
  sum += +argument;
});

console.log(sum);
