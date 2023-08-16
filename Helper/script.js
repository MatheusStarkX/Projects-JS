// var titulo = document.getElementsByTagName('h1')[0];
// console.log(titulo);

// var list =  document.getElementsByTagName('li')
// console.log(list[2])

// var paragrafo = document.getElementById('paragrafo')
// console.log(paragrafo)

// var itensDaLista = document.getElementsByClassName('item')
// console.log(itensDaLista)

// var itensClasse = document.getElementsByClassName('item');
// console.log(itensClasse)

// var itensQuery = document.querySelectorAll('#lista2 li')
// console.log(itensQuery)

// var itensQuery2 = document.querySelectorAll('#lista .item')
// console.log(itensQuery2)

// var lista = document.querySelector('#lista')
// console.log(lista) 

// var span = document.querySelector('#paragrafo span')
// console.log(span)

// var title = document.querySelector('#title');
// title.innerHTML = "Vai se fuder";

// var subtitle = document.querySelector('.subtitle');
// subtitle.textContent = "Tomar no cu"; // Recomendado

// var novoParagrafo = document.createElement('p');
// var texto = document.createTextNode('Outro parágrafo!!!');
// novoParagrafo.appendChild(texto);
// console.log(novoParagrafo);

// var body = document.querySelector('body');
// body.appendChild(novoParagrafo)



// var el = document.createElement('span');
// el.appendChild(document.createTextNode('Texto de um span'));
// var container = document.querySelector('#container');
// container.appendChild(el);

// var container = document.querySelector('#container');
// var p = document.querySelector('#container p');

// container.removeChild(p)

// var subtitle = document.querySelector('.subtitle');
// subtitle.remove();

// var el = document.createElement('div');
// el.classList = 'div-criada';
// el.appendChild(document.createTextNode('Texto da Div 1'))
// console.log(el);

// var container = document.querySelector('#container');
// container.appendChild(el)

// var el2 = document.createElement('div')
// el2.classList = 'div-antes'
// el2.appendChild(document.createTextNode('Texto da Div 2'))

// var el3 = document.querySelector('#container .div-criada')
// container.insertBefore(el2, el3)

// var el = document.createElement('h1')
// el.classList = 'novaClasse'
// el.appendChild(document.createTextNode('Novo H1'))

// var title = document.querySelector('#title')

// var pai = title.parentNode
// pai.replaceChild(el, title)

// var btn = document.querySelector('.btn')
// btn.setAttribute('disabled', 'disabled')

// var subtitle = document.querySelector('.subtitle')
// subtitle.setAttribute('id','idzinho')
// console.log(subtitle)

// var lista = document.querySelector('#lista')
// lista.removeAttribute('id')
// console.log(lista)

var title = document.querySelector('#title')
title.style.color = 'red'
var subtitle = document.querySelector('.subtitle')
subtitle.style.cssText = 'color: blue; background-color: pink';