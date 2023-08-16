var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [p1, c1, p2, c2] = lines[0].split(' ');

var res = p2*c2 - p1*c1;

if(res === 0){
    console.log('0')
} else if(res > 0){
    console.log('1')
} else {
    console.log('-1')
}