let pessoa = {
    nome: "Maria Eduarda",
    sobrenome: "Saldanha",
    empresa: "FUSI",
    cargo: "Programador Full Stack"
};

// descontruindo um objeto
/*
const { nome, cargo, empresa, sobrenome } = pessoa;

console.log(nome);
console.log(cargo);
console.log(empresa);
console.log(sobrenome);
*/

// renomeando uma propriedade para caso tenha uma variável com o mesmo nome de uma propriedade do objeto
let nome = "TESTE"
const { nome: nomePessoa, cargo, empresa, sobrenome } = pessoa;

console.log(nomePessoa);

// ==========================================================================================================

// descontruindo uma array

let nomes = ["Maria", "Matheus", "Arthur", "Michael"];


let { 0:primeirapessoa, 2:terceirapessoa } = nomes;

console.log(primeirapessoa);
console.log(terceirapessoa);


let [primeironome, segundonome] = nomes;

console.log(primeironome);
console.log(segundonome);


