var area = document.getElementById("area"); // acessando o elemento do h2

function entrar () { // função depois que o usuário clicar no botão
    var nome = prompt("Digite seu nome");

    if (nome === '' || nome === null) { // || -> indica 'ou'
        alert("Ops! Algo deu errado");
        area.innerHTML = "Clique no botão para acessar...";
    } else {
        area.innerHTML = "Bem-vindo " + nome + ' '; // injetando (mudando) o componente dentro do html
        //De bem-vindo, essa função alterou para "Bem-vindo *nome*"
        
        let botaoSair = document.createElement("button"); // criando um elemento do tipo "button"

        botaoSair.innerText = 'Sair da conta'; // colocar um texto dentro do botão
        botaoSair.onclick = sair;

        area.appendChild(botaoSair); // colocando mais um elemento dentro do h2
    }
}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
}

function mediaAluno (nota1, nota2) {
    var media = (nota1 + nota2) / 2;
    
    if (media >= 7) {
        console.log("Aluno aprovado com a média: " + media);
    } else if (media < 7) {
        console.log("Aluno reprovado com a média: " + media);
    }
}

function aluno (nome, curso) {
    var mensagem = "Seja bem-vindo " + nome + " ao curso de " + curso;
    
    console.log(mensagem);
}