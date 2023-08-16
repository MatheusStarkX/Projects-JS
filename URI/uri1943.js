var input = require('fs').readFileSync('stdin', 'utf8');

var num = parseInt(input);

if(num == 1){
    console.log('Top 1');
} else if(num > 1 && num <= 3){
    console.log('Top 3')
} else if(num > 3 && num <= 5){
    console.log('Top 5')
} else if(num > 5 && num <= 10){
    console.log('Top 10')
} else if(num > 10 && num <= 25){
    console.log('Top 25')
} else if(num > 25 && num <= 50){
    console.log('Top 50')
} else {
    console.log('Top 100')
}