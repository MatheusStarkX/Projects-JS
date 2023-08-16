var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var num = 0;
var sequencia = lines[0].split(' ');

sequencia.forEach((element) => {
    num++;
    if(element === '1'){
        console.log(num);
    }
})