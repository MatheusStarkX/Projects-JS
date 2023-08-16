// let clique = document.getElementById('botao');
// console.log(clique);

// clique.addEventListener('click', function(){
//     this.classList.toggle('classinha');
// });

// console.log(clique);




// Promises

// const myPromise = new Promise((resolve, reject) => {
//     const nome = "Matheus"

//     if (nome === 'Matheus') {
//         resolve('Usuário encontrado')
//     } else{
//         reject('Usuário não encontrado')
//     }
// })

// myPromise.then((data) => {
//     console.log(data.toUpperCase())
// })

// Exemplo real

// const usuario = 'MatheusStarkX'

// fetch(`https://api.github.com/users/${usuario}`, {
//     method: 'GET',
//     headers: {
//         Accept: 'application/vnd.github.v3+json',
//     },
// }).then((response) => {
//     console.log(typeof response)
//     //console.log(response)
//     return response.json()
// }).then((data) => {
//     console.log(`O nome do usuário é ${data.name}`)
// }).catch((err) => {
//     console.log(`Houve algum erro: ${err}`)
// })


// Async e Await

// function PrimeiraFuncao() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Esperou isso aqui!')
//             resolve()
//         }, 2000)
//     })
// }

// async function SegundaFuncao() {
//     console.log('Começou')

//     await PrimeiraFuncao()

//     console.log('Terminou')
// }

// SegundaFuncao()

// Exemplo real

function getUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err))
}

async function showUserName(id){

    try {
        const user = await getUser(id)
        console.log(`O nome do usuário é ${user.data.first_name}`)
    } catch (err) {
        console.log(`Erro: ${err}`)
    }
}

showUserName(7)