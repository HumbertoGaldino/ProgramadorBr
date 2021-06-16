
/*Conjunto de variáveis, é sequencial, inicia no indice 0
  length = tamanho
*/


//var alunos = new Array("Igor", "José", "Mariana", "Marcos");
var alunos = ["Igor", "José", "Mariana", "Marcos"]; 

for (var i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

for (var aluno in alunos){
    console.log(aluno);
}

for (var aluno of alunos){
    console.log(aluno);
}
