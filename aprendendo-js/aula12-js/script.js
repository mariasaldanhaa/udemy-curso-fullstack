// REST Operator (parecido como o Spread Operator)

function convidados(...nomes) {  //é uma feature do JavaScript que permite combinar ou agrupar argumentos em uma única estrutura, como um array
    console.log("SEJAM BEM-VINDOS CONVIDADOS!");
    console.log(nomes);
}

convidados("Matheus", "Lucas", "Maria");

function sorteador (...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length); // está sorteado os números com base na sua posição
    console.log(`Número sorteado foi: ${numeros[numeroGerado]}`);
}

sorteador(1, 4, 5, 15, 25, 90, 55, 34);