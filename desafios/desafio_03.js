// ::::::::::::: Desafio 03 - Aula 03 - Reiniciando o jogo - Curso 02 Lógica de programação: explore funções e listas

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(peso,altura){
    let imc = peso / (altura * altura);
    return imc;
}


// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }

    let fatorial = 1;
    for(let i = 2; i <= numero; i++){
        fatorial *=i;
    }

    return fatorial;
}

let numero = 7;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterRealEmDolar(valorEmDolar){
    let cotacaoDolar = 4.80;
    let valorEmDolar = valorEmReal / cotacaoDolar;
    return valorEmDolar.toFixed(2);
}

let valorEmReal = 10.50;
let valorEmDolar = converterRealEmDolar(valorEmReal);
console.log(`${valorEmReal} reais equivalem a U$ ${valorEmDolar}`);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaEPerimetroSalaRetangular(altura, largura){
    let area = largura * altura;
    let perimetro = 2 * (largura + altura);

    console.log(`Area da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}
// dados em metros!
let largura = 15; 
let altura = 5;
calcularAreaEPerimetroSalaRetangular(altura, largura);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio){
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área da sala circular: ${area} metros quadrados `);
    console.log(`Perímetro da sala circular: ${perimetro} metros`)
}

// dados em metros!
let raio = 6;
calcularAreaPerimetroSalaCircular(raio);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(numero){
    for(let i = 1; i<=10; i++){
        let resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
}
numero = 9;
mostrarTabuada(numero);