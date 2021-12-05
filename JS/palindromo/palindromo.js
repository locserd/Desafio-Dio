//Verificar se uma palavra eh um palindromo
const args = process.argv;

var palavra = args[2];
function verificaPalindromo(palavra){
	if(!palavra){
		return 'Digite uma palavra';
	}
	return palavra === palavra.split('').reverse().join('');
}
console.log(verificaPalindromo(palavra));

