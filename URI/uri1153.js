var input = require('fs').readFileSync('stdin', 'utf8');

var num = parseInt(input)

function fatorial(num){
    if (num-1 == 0){
        return 1
    }
    return num*fatorial(num-1)
}

console.log(fatorial(num))