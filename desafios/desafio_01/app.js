let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarClick() {
    console.log('O botão foi clicado!');
}

function verificarAlerta() {
    alert('Eu amo JS!');
}

function perguntarCidade(){
    let cidade = prompt('Digite o nome de uma cidade brasileira');
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function somarValores(){
    let valor1 = parseInt(prompt('Digite um número'));
    let valor2 = parseInt(prompt('Digite outro número'));
    soma = valor1 + valor2;
    alert(`A soma dos números ${valor1} e ${valor2} é igual a ${soma}`);
}