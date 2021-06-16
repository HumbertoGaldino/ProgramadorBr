

//está função só funcionara atrelada com um objeto
function calcMedia () {
    return (this.notas[0] + this.notas[1]) / 2;
};

//objeto aluno
var aluno = {nome: "Igor",
            notas:[9, 8],

            //método do objeto 
            media: calcMedia
            

};

//objeto aluno1
var aluno1 = {nome: "Gabriel",
            notas:[7, 5],

            //método do objeto 
            media: calcMedia

};

console.log(aluno.nome);
console.log(aluno.media());


console.log(aluno1.nome);
console.log(aluno1.media());