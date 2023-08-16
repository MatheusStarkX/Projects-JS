var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [compet, folhas, quant] = lines[0].split(' ');

if(folhas >= compet*quant){
    console.log('S')
}else{
    console.log('N')
}