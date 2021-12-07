const alunos = [
    {
        nome:'João',
        nota:7,
    },
    {
        nome:'Pedro',
        nota:9
    },
    {
        nome:'Marcelo',
        nota:3
    },
    {
        nome:'Flavia',
        nota:8
    }
];


function aprovaAluno(alunos,media){
    let aprovados = [];
    for (let index = 0; index < alunos.length; index++) {
        let aluno = alunos[index];
        
        if(aluno.nota >= media){
            aprovados.push(aluno.nome);
        }
    }
    return aprovados;
}
console.log(aprovaAluno(alunos,5));