
var calcMedia = function(){
    return (this.nota1 + this.nota2)/2;
}


function criarAluno(nome, n1, n2) {

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: calcMedia
        }
}

var turma = [
    criarAluno("Igor", 8, 7.5),
    criarAluno("João", 7, 5),
    criarAluno("Guilhermina", 6, 9)

]

var aluno = turma[0];

turma.forEach( function(elemento) {

    console.log(elemento.nome + " - " + elemento.media());

})