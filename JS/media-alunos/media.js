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
    let desaprovados = alunos;
    

    for (let index = 0; index < alunos.length; index++) {
        let aluno = alunos[index];
        
        if(aluno.nota >= media){
            aprovados.push(aluno.nome);
            desaprovados.splice(alunos.indexOf(aluno),1);
            index--;
        }
    }
    
    let reprovados = [];
    for (let index = 0; index < desaprovados.length; index++) { // substituir por delete desaprovados.nota
        reprovados[index] = desaprovados[index].nome;
    } 
    
    
    return `Alunos aprovados: \n ${aprovados} \nAlunos Reprovados: \n ${reprovados}`;
}

console.log(aprovaAluno(alunos,5));//ok