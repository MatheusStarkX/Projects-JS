// function exibir(num) {
//     console.log("A operação resultou em: " + num);
// }

// function soma (a, b, callback){
//     var op = a + b;
//     callback(op);
// } 

// function multi(a, b, cb){
//     var op = a*b;
//     cb(op);
// }

// soma(2,2,exibir);
// multi(2,4,exibir);

// -----------------------------------

// setTimeout(function(){
//     console.log("Testando setTimeout");
// }, 2000);

// setInterval(function(){
//     console.log("Testando setInterval");
// }, 1000);

// -----------------------------

// var x = 0;

// var myTimer = setTimeout(function(){
//     console.log("O x é 0");
// }, 1500);

// x = 5;

// if (x>0){
//     clearTimeout(myTimer);
//     console.log("O x passou de 0");
// }

var myInterval = setInterval(function(){
    console.log("Imprimindo intevalo");
}, 500);

setTimeout(function(){
    console.log("Não precisa mais repetir");
    clearInterval(myInterval);  
}, 1500);


