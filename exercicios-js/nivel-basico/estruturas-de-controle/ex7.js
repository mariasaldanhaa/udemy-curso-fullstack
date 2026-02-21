// Desenvolva um jogo de adivinhação onde o 
// usuário tenta acertar um número aleatório entre 1 e 100.

let numeroUsuario = 7; // escolhi o meu número da sorte

let aleatorio = Math.floor(Math.random() * 100) + 1;
// o random retorna um número decimal no intervalo de [0, 1)
// (inclui o zero, mas nunca chega a 1), então fiz a multiplicação
// para expadir esse intervalo até 99.999.
// Porém, o random retorna como decimal e não número inteiro não-nulo, então
// eu atribuí o floor pra arredondar esse número pra baixo e adicionar mais um.

// floor - sempre arredonda pra baixo;
// ceil - sempre arredonda em direção ao infinito positivo;
// round - sempre arredonda pra cima;

console.log("Número que o usuário escolheu: " + numeroUsuario);
console.log("Número sortido: " + aleatorio);


if (numeroUsuario == aleatorio) {
    console.log("PARABÉNS, VOCÊ ACERTOU!");
} else {
    console.log("Que pena! Você errou, tente novamente.");
}

