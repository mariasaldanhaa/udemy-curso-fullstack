// Spread Operator(...)

let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 10] //(...) - permite "espalhar"/expandir elementos de uma array
// nesse caso, colocou os elementos da primeira array e depois continua com o restante

console.log(numeros);

// EXEMPLO PARA OBJETOS

let pessoa = {
    nome: "Maria",
    idade: 18,
    cargo: "Programadora"
}

let novaPessoa = {
    ...pessoa,
    status: "ATIVA",
    cidade: "Campo Belo / MG"
}

console.log(novaPessoa);

// EXEMPLO 2:

function novoUsuario (info) {
    let data = {
        ...info,
        status: "ATIVO",
        inicio: "20/03/2023",
        codigo: 123123
    }

    console.log(data);
}

novoUsuario ({
    nome: "José", 
    sobrenome: "Silva",
    cargo: "DEV",
});