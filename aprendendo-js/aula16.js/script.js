// Funções anônimas

/*
    () => {}

    1- Os parênteses, que é por onde a função recebe os argumentos
    2- "seta" -> responsável pelo nome "arrow"
    3- e as chaves:  bloco de código que representa o corpo da função
*/

function soma(a, b) {
    let total = a + b;
    return console.log(total);
}

soma(10, 30);

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2;
    console.log(total);
}

subtrair(60,30);

let numeros = [1, 5, 3, 10]

numeros.map((item) => {
    console.log(item);
})