// diferença entre var, let e const

// EXEMPLO DE VAR:
var nome = "Sujeito";

if (nome === "Sujeito") {
    var cargo = "Programador Frontend"
    console.log(cargo);
} // ao realizar essa função, a variável cargo ainda pode ser alterada fora da função
// Ex: se estiver usando o console, usuário pode atribuir outro valor na variável cargo.

// EXEMPLO DE LET
var nome = "Sujeito";

if (nome === "Sujeito") {
    let cargo = "Programador Frontend";
    console.log(cargo);
} // ao realizar essa função, a variável cargo não poderá ser alterada fora do bloco,
// diferentemente do "var"

// EXEMPLO DE CONST
const cargo = "Programador Front End";

cargo = "Programador mobile" // depois que a constante é iniciada, você não consegue trocar mais o valor dela
