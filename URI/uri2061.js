var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [abas, acoes] = lines[0].split(' ');

for(let i=1; i<parseInt(acoes)+1; i++){
    if('fechou' === lines[i]){
        abas++;
    }else{
        abas--;
    }
}
console.log(abas)