// Crie uma função que receba dois números e retorne a soma, 
// subtração, multiplicação e divisão.

function calculadora(a, b) {
    let soma = a + b;
    let subtracao = a - b;
    let multiplicacao = a * b;

    return console.log(`Soma: ${soma}
                    \nSubtração: ${subtracao}
                    \nMultiplicação: ${multiplicacao}`);
}

calculadora(28, 32);