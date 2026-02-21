// reduce - busca reduzir um array

let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - índice atual`);
    console.log(`${original} - array original`);

    return acumulador += numero;
})

console.log("TOTAL DO REDUCE: " + total);