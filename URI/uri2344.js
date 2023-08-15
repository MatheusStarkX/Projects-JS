var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var note = parseInt(lines);

if(note == 0){
    console.log('E');
} else if(1 <= note && note <= 35){
    console.log('D');
} else if(36 <= note && note <= 60){
    console.log('C');
} else if(60 <= note && note <= 85){
    console.log('B');
} else {
    console.log('A');
}