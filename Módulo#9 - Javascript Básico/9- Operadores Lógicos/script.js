// && e
// || ou
// Negativo

var a = true;
var b = false;

//c recebe a e b são verdadeiros? = false
var c = a && b;

console.log(c);


// Operador Lógico "E" - &&

var idade = 25;

var maior20 = idade > 20;
var menor30 = idade < 30;

var entre = maior20 && menor30;

console.log("Maior que vinte ", maior20);

console.log("Menor que trinta ", menor30);

console.log("Entre 20 e 30 ", entre);


//Operador Lógico "OU" - ||

var idade=9;

var menor10 = idade <= 10;
var maior65 = idade >= 65;

//Entrada gratuita para menores de 10 e maiores de 65

var free = menor10 || maior65;

console.log("Entrada gratuita: ", free);
