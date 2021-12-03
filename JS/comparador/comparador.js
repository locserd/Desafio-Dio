// Atividade
//
//     Crie uma função que recebe dois números como parâmetros.
//     Confira se os números são iguais.
//     Confira se a soma dos números é maior que 10 ou menor que 20.
//     Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
//
// Exemplo:
//
// Input: 1, 2
// Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

// Uso "node comparador.js numeroum numerodois"


const args = process.argv // input atraves da cli
var numeroUm = Number(args[2]);
var numeroDois = Number(args[3]);

if(numeroUm===numeroDois){
  var fraseA = "Os números são iguais"
}else{
  var fraseA = "Os números são diferentes"
}

var soma = numeroUm+numeroDois;
var fraseB = " Sua soma é "+soma;

if(soma>10){
  if(soma<20){
    fraseC = ", que é maior que 10 e menor que 20";
  }
  else if(soma>20){
  fraseC = ", que é maior que 20";
  }
}else{
  fraseC = ", que é menor que 10";
}

show = fraseA+fraseB+fraseC;
console.log(show);
