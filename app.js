/*
let numeroSecreto = 6;
let numeroUsuario = prompt('Me indicas un numero por favor:');

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
	alert('Acertaste el número');
}
*/


//let nombre = "Luna";
//let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "¡Error! Completa todos los campos";

alert("¡Bienvenida y bievenido a nuestro sitio web!");
alert("¡Error! Completa todos los campos");
alert(mensajeDeError);

let nombre = prompt('Ingresa un Nombre de Usuario:');
let edad = prompt('Ingrese su Edad:');

if (edad >= 18) {
	alert("¡Puedes obtener tu licencia de conducir!");
	
}