/*
//Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
*/
/*
let contador = 1;
while (contador <= 10) {
console.log(contador);
contador++;
}
console.log(`Ya contamos hasta ${contador - 1}`);
*/
/*
let contador = 10;
while (contador >= 0) {
console.log(contador);
contador--;
}
console.log(`Ya contamos hasta ${contador + 1}`);
*/
/*
let numeroMaximo = prompt("Ingresa un número para la cuenta Regresiva:");
while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}
console.log(`Llegamos a ${numeroMaximo + 1}`);
*/

let numeroMaximo = prompt("Ingresa un número para la cuenta Progresiva:");;
let contador = 0;
while (contador <= numeroMaximo) {
console.log(contador);
contador++
}
console.log(`Ya contamos hasta ${contador - 1}`);
