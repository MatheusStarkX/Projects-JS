var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let num = 0
var type = lines[0]
var answer = lines[1].split(' ')

for(let x in answer){
    if(parseInt(type) == parseInt(answer[x])){
        num++
    }
}

console.log(num)
