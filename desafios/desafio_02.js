// ::::::::::::: Desafio 02 - Aula 02 - Funções - Curso 02 Lógica de programação: explore funções e listas


// Criar uma função que exibe "Olá, mundo!" no console.
function exibirCumprimento(){
    console.log('Olá, mundo!');
}

exibirCumprimento();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirCumprimentoNome(nome){
    console.log(`Olá, ${nome}`);
}

exibirCumprimentoNome('Natalia');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero){
    return numero * 2;
}

let resultadoDobro = calcularDobro(2);
console.log(resultadoDobro);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(num1, num2, num3){
    return (num1, num2, num3) / 3;
}

let media = calcularMedia(6, 9, 3);
console.log(media);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornarNumeroMaior(a, b){
    return a > b ? a : b ;
}

let maiorNumero = retornarNumeroMaior(30, 60);
console.log(maiorNumero)

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function retornarQuadrado(num){
    return num * num;
}

let resultadoQuadrado = retornarQuadrado(5);
console.log(resultadoQuadrado);
