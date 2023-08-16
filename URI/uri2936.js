var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines.forEach((element) => parseInt(element));

soma = 225 + lines[0]*300 + lines[1]*1500 + lines[2]*600 + lines[3]*1000 + lines[4]*150; 
console.log(soma);