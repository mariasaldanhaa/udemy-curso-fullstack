// Crie uma calculadora de IMC (peso / altura²) 
// e classifique o resultado.

let peso = 59;
let altura = 1.60;

let imc = peso / altura**2;

if (imc >= 18.5 && imc < 25) {
    console.log(`IMC: {imc} 
                \n {Seu peso é ideal.}`
    );
}
else if (imc < 18.5) {
    console.log(`IMC: {imc} 
                \n {Você está muito magro!}`
    );
}
else if (imc >= 25 && imc < 30) {
    console.log(`IMC: {imc} 
                \n {Você está obeso!}`
    );
}
else if (imc >= 30 && imc < 35) {
    console.log(`IMC: {imc} 
                \n {Você está na obesidade severa!}`
    );
}
else if (imc >= 35 && imc < 45) {
    console.log(`IMC: {imc} 
                \n {Você está na obesidade mórbita!}`
    );
}
else if (imc > 45) {
    console.log(`IMC: {imc} 
                \n {Você está na obesidade extremamente mórbita!}`
    );
}