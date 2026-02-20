// switch

function pedir() {
    var valor = prompt("Digite o valor da sua escolha: "); // retorna como string

    switch (Number(valor)) { // conversão de string para número
        case 1:
            alert("Você escolheu 1 = Suco");
            break;
        case 2:
            alert("Você escolheu 2 = Água");
            break;
        case 3:
            alert("Você escolheu 3 = Sorvete");
            break;
        case 4:
            alert("Você escolheu 4 = Chama o garçom");
            break;
        default:
            alert("Escolha de 1 até o 4.");
            break;
    }
}

function nome () {
    var sexo = prompt("Você é homem ou mulher?");

    if (sexo == 'homem' || sexo == 'mulher') {   
        var name = prompt("Digite o seu nome: ");

        switch (name) {
            case 'José':
                alert("Parabéns! Seu nome está em primeiro lugar da lista");
                break;
            case 'João':
                alert("Parabéns! Seu nome está em segundo lugar da lista");
                break;
            case 'Antonio':
                alert("Parabéns! Seu nome está em terceiro lugar da lista");
                break;
            case 'Maria':
                alert("Parabéns! Seu nome está em primeiro lugar da lista");
                break;
            case 'Ana':
                alert("Parabéns! Seu nome está em segundo lugar da lista");
                break;
            case 'Francisca':
                alert("Parabéns! Seu nome está em terceiro lugar da lista");
                break;
            default:
                alert("Fique feliz, seu nome não é tão popular! (ou talvez ainda possar estar dentro do top 10)");
                break;
        }
    } else {
        alert("Ops, Algo deu errado! Digite 'homem' ou 'mulher'.")
    }
}