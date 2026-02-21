// Escreva uma função que 
// verifique se uma palavra é um palíndromo.

function verificarPalindromo(palavra) {
    let inversao = palavra.split("").reverse().join("");
    // o split foi usado para separar a string em arrays pra ser atribuído o reverse (a função inverte os elementos apenas de arrays),
    // depois utilizei o join pra poder juntar esses elementos.

    // OBS: Utilizei o toLowerCase() porque o JavaScript diferencia 
    // letras maiúsculas de minúsculas. Sem ele, "Ana" invertida vira "anA",
    // e "Ana" !== "anA" (por causa do A maiúsculo vs a minúsculo).
    // Com toLowerCase(), ambas viram "ana" e a comparação funciona!
    
    if (palavra.toLowerCase() == inversao.toLowerCase()) {
        return console.log(`Palavra: ${palavra}
                    \nPalavra invertida: ${inversao}
                    \nA palavra ${palavra} é um palíndromo!`)
    } else {
        return console.log(`Palavra: ${palavra}
                    \nPalavra invertida: ${inversao}
                    \nA palavra ${palavra} não é um palíndromo!`)
    }
}

verificarPalindromo("Ana");

