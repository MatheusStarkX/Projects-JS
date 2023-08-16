var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

quant = parseInt(lines[0].split(' '));

for(let i=0; i<quant; i++){
    var [a, b] = lines[i+1].split(' ')
    console.log(parseInt(a) + parseInt(b))
}