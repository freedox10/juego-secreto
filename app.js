//Variables

let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log('Valor de intento:', numeroUsuario);
console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);
console.log('Valor del número secreto:', numeroSecreto);

//Este código realiza
//la comparación

if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    if (numeroUsuario > numeroSecreto) {
        alert('El número secreto es menor');
    } else {
        alert('El número secreto es mayor');
    }
    //La condición no se cumplió
    //alert('Lo siento, no acertaste el número');
}

//DESAFIO 2
/*
let diaSemana = prompt('que día de la semana es? :');
if (diaSemana == 'Sábado' || diaSemana == 'Domingo') {
    alert('Buen fin de Semana');
} else {
    alert('Buena Semana');
}
*/
/*
let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}
*/
/*
let puntuacion = 95;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}
*/
/*
// saldo
let saldoCuenta = 578; 
alert(`Tu saldo es de $ ${saldoCuenta}.`);
*/
/*
let nombre = prompt('Ingresa tu nombre');
alert(`¡ Bienvenido ${nombre} !`);
*/