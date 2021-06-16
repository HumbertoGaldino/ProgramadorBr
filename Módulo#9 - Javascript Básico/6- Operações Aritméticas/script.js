// + Adição
// - Subtração
// * Multiplicação
// / Divisão
// % módulo
// ++ Incremento
// -- Decremento

var a = 10;
var b = 15;

var c = a + b;

var d = a - b;

var e = a * b;

var f = a / b;

var g = a % b; /*a módulo b retorna o que sobra/o resto
               da divisão, nesse caso sobra 10 pelo
                fato de a/b não dar um inteiro, 
                portanto não divide*/

a++; //incrementa 1 unidade
b--; //decrementa 1 unidade

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(a);
console.log(b);

//A ORDEM IMPORTA

a = 30
b = 50;

//PRIMEIRO RECEBE a DEPOIS INCREMENTA ENTÃO b PASSA A TER 30 COMO CONTEÚDO AO INVÉS DE 31

b = a++;

console.log(b);

//PRIMEIRO INCREMENTA DEPOIS RECEBE O VALOR DE a, PORTANTO b = 32 DEVIDO TER INCREMENTADO ANTERIORMENTE E NOVAMENTE AO RECEBER a

b = ++a;

console.log(b);

