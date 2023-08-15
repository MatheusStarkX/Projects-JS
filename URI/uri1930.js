var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var res = -3

for (let i = 0; i < lines.length; i++) {
    res += parseInt(lines[i]);
} 

console.log(res)