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


function desaprovaAluno(alunos,media){
    let desaprovados = alunos;
    
    for (let index = 0; index < alunos.length; index++) {
        let aluno = alunos[index];
        let desaprovados = alunos;
        
        if(aluno.nota >= media){
            desaprovados.splice(alunos.indexOf(aluno),1);
            index--;
        }
    }
    return desaprovados;

}
console.log(desaprovaAluno(alunos,5));