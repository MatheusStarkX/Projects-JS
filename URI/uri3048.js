var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var num = 0;
var final = [];

function difer(value){
    return value != '';
}

var array = lines.filter(difer);
array.shift()

for(let i=0; i < array.length; i++){
    if(i == 0){
        final.push(array[i])
    }else if(array[i] != final.slice(-1)){
        final.push(array[i])
    }
}

//console.log(final)
console.log(final.length)