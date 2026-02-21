// includes - realiza uma busca e retorna booleano
let nomes = ["Matheus", "Lucas", "Maria"];

console.log(nomes.includes("Lucas"));

if(nomes.includes("Matheus")) {
    console.log("Está na lista");
} else {
    console.log("Não está na lista");
}

//startswith - busca dentro de uma string se começa com a plavra e retorna booleano
let nome = "Matheus";

console.log(nome.startsWith("S"));

// endWith - busca dentro de uma string se termina com a palavra e retorna booleano

console.log(nome.endsWith("A"));
