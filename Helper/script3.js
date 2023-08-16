// var btn = document.querySelector("#botao");

// console.log(btn)

// btn.addEventListener("click", function(){
//     console.log("clicou");
//     this.style.color = "red";
// });

// var title = document.querySelector("#title");

// title.addEventListener("dblclick", function(){
//     var subtitle = document.querySelector(".subtitle");
//     subtitle.style.display = "none";
// });

// var subtitle = document.querySelector(".subtitle");
// var legenda = document.querySelector("#legenda");

// subtitle.addEventListener("mouseover", function(){
//     legenda.classList.remove("hide")
// });

// subtitle.addEventListener("mouseout", function(){
//     legenda.classList.add("hide")
// });

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        console.log("Apertou o enter")
    }
});

document.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        console.log("Soltou o enter")
    }
});