// Crie um algoritmo que encontre o maior número 
// em um array de 5 números.

let lista = [10, 5, 20, 100, 90];

if (lista.length == 0) {
    console.log("Essa lista está vazia.");
} else {
    console.log("Lista: " + lista);

    let maior = lista[0]; // assumindo que o primeiro é o maior.

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    console.log("O maior número dessa lista é o: " + maior);
}