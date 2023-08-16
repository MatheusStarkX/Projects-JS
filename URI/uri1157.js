var input = require('fs').readFileSync('stdin', 'utf8');

var num = parseInt(input);
var i = 1;

while(i <= num){
    if(num%i === 0){
        console.log(i)
    }
    i++
}