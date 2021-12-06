// Atividade:
// Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.
// Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]
// Output -> [1, 3, 0, 0, 0, 33, 23, 0]
// Input -> []
// Output -> -1

const args = process.argv;
array = args.splice(2);
//verifica array existe
if(!array.length) return console.log(-1);

//verifica se são apenas números

for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if(isNaN(element)){
        console.log("Erro. Digite apenas números");
        return;
    }

}

console.log(`Alterando o array : ${array}`);

function substituiNumerosPares(array) {
	
	const naoZero = (num) => num != 0; // usando apenas != ao invés de !===
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (array[i]==0) {
			console.log('já vale 0!');
		}
	}
	console.log(array);
}
var array;
substituiNumerosPares(array);