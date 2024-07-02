class Aluno {
    constructor (nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}
let notasAlunos = [];

const Luiz = new Aluno("Luiz", 7);
notasAlunos.push(Luiz);

const Lorena = new Aluno("Lorena", 7);
notasAlunos.push(Lorena);

const Rodrigo = new Aluno("Rodrigo", 2);
notasAlunos.push(Rodrigo);

const Rogério = new Aluno("Rogério", 4);
notasAlunos.push(Rogério);

const alunosNotaMaiorQue6 = notasAlunos.filter(function(item){
    return item.nota >= 6;
})
// usado o filter para retornar os itens no array que preenchem o requisito.

console.log(notasAlunos);
console.log (alunosNotaMaiorQue6);