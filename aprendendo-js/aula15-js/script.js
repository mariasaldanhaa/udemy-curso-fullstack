// FIND - busca elemento dentro de um array

let listagem = [5, 3, "José", 2, "Matheus"]

let busca = listagem.find((item) => {
    if (item === "José") {
        return console.log("ITEM ENCONTRADO COM SUCESSO")
    }
});

// FILTER - filtra algo dentro de um array

let palavras = ["Matheus", "José", "Ricardo Silva", "Sujeito Programador"];

let resultado = palavras.filter((item) => {
    return item.length <= 4;
})

console.log(resultado);

// O filter devolve tudo aquilo que ele encontrar com base na sua comparação,
// já o find ele retorna o primeiro elemento da array que satisfaz a condição passada