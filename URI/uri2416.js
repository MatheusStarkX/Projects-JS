var input = require('fs').readFileSync('stdin', 'utf8');
var line = input.split('\n');

var [corrida, pista] = line[0].split(' ')
console.log(corrida%pista)