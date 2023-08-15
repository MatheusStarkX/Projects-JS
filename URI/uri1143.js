var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for(let i=0; i<parseInt(lines); i++){
    var x = i+1
    console.log(`${x} ${x**2} ${x**3}`)
}
