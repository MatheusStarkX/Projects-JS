var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

function difer(value){
    return value != '';
}

var array = lines.filter(difer);
array.shift()

var dist = 0;

for(k in array){
    var taco = array[k].split(' ')
    var time = parseInt(taco[0])
    var speed = parseInt(taco[1])
    //console.log(time*speed)
    dist += time*speed
}
console.log(dist)