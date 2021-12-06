//Verificar se uma palavra eh um palindromo
const args = process.argv;
if(args.length > 3){
	console.log("Digite apenas uma palavra.");
	return;
}

const palavra = args[2];

function verificaPalindromo(palavra){
		return palavra === palavra.split('').reverse().join('');
}
if(verificaPalindromo(palavra)){
		console.log("É um palíndromo");
}else {
	console.log("Não é um palíndromo");
}

verificaPalindromo(palavra);
