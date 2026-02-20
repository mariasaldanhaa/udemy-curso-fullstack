function calcular(event) {
    //getElementById - pega o elemento pelo ID
    //.value - pega o valor do elemento

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var imc = peso / altura**2;
    var resultado = document.getElementById('resultado');

    event.preventDefault(); 
    // ao clicar no botão para submeter, o event faz com que fique estático os dados colocados no input

    if (imc < 17) {
        resultado.innerHTML = '<br /> Seu resultado foi: ' + imc.toFixed(2) + //controla quantas casas decimais depois da vírgula
                            '<br /> Cuidado, você está muito abaixo do peso!'
    } else if (imc > 17 && imc <= 18.49) {
        resultado.innerHTML = '<br /> Seu resultado foi: ' + imc.toFixed(2) +
                            '<br /> Cuidado, você está abaixo do peso!'
    } else if (imc >= 18.5 && imc < 24.99) {
        resultado.innerHTML = '<br /> Seu resultado foi: ' + imc.toFixed(2) +
                            '<br /> Parabéns, você está no peso ideal!'
    } else if (imc > 25 && imc < 29.99) {
        resultado.innerHTML = '<br /> Seu resultado foi: ' + imc.toFixed(2) +
                            '<br /> Cuidado, você está acima do peso!'
    } else if (imc >= 30){
        resultado.innerHTML = '<br /> Seu resultado foi: ' + imc.toFixed(2) +
                            '<br /> Cuidado com a obesidade!'
    }

    document.getElementById('peso').value = ''; // os campos retornam vazio após o submit
    document.getElementById('altura').value = '';
}