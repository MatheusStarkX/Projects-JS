var input = require('fs').readFileSync('stdin', 'utf8');
var line = input.split('\n');

var [carta1, carta2] = line[0].split(' ');

if(carta1 === carta2){
    console.log(carta1);
} else if(parseInt(carta1) > parseInt(carta2)){
    console.log(carta1);
} else {
    console.log(carta2);
}

