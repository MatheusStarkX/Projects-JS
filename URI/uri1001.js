var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift())
var b = parseInt(lines.shift())

res = a+b

console.log(`X = ${res}`)