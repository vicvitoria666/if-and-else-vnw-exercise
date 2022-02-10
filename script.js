//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro


//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let idade = 18

if (idade >= 18) {
    console.log('Tu é de maior')
} else {
    console.log('Espere até lá ;)')
}

let human = true

if (idade >= 18 && human == true) {
    console.log('Parabéns tu é um adulto humano')
} else {
    console.log('Você não é humano ou adulto')
}

let aniversário = 'janeiro'

if (aniversário === 'janeiro','dezembro') {
    console.log('parabéns tu é de capricórnio')
} else {
    console.log('ops não foi dessa vez')
}

let name = 'vitória'

if (name.indexOf('R') == 0) {
    console.log ('seu nome começa com R')
}

