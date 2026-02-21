// Faça uma função que conte quantas 
// vogais existem em uma string.

function contarVogais(palavra) {
    let i = 0;
    let vogais = "aeiou";
    let contador = 0;

    while (i < palavra.length) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
        i++;
    }
    return console.log(contador);
}

contarVogais("Maria");