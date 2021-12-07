# :sweat_smile: Desafio DIO
## Desafios:
 1. Criar um  repositório no GitHub
 2. Criar um contador em JavaScript
 3. Criar uma lista de tarefas em JavaScript
 4. Comparador de números em JavaScript
 5. Verificar palíndromo
 6. Substituir números pares em um array 

> O repositório é atualizado a partir de novos desafios.


### Próximas:

### Atividade 1: Alunos Aprovados

1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.(!!!)

### Atividade 2: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
```

