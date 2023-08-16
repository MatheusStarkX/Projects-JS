var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var prova1 = parseInt(lines.shift())
var media = parseInt(lines.shift())

var prova2 = media*2 - prova1;

console.log(prova2);