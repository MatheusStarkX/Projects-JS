var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var desejada = parseInt(lines.shift())
var lida = parseInt(lines.shift())

console.log(desejada-lida)