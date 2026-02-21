function acao() {
    document.writeln("Executando... <br />");
}

/*
setInterval(acao, 1000); */
// essa função é utilizada para executar uma função repetidamente em intervalos de tempo especificados

/*
 var timer = setInterval(() => {
    // dentro dessas chaves é uma função anônima
    document.writeln("executando... <br />")
}, 1000) */
// colocou o setInterval dentro da variável timer pra poder fazer ele parar
// dentro do console - clearInterval(timer)

setTimeout(acao, 3000); // ele chama a função depois de um certo tempo e para

//  ou pode fazer pela função anônima
setTimeout(() => {
    document.writeln("Executando... <br />")
}, 3000)