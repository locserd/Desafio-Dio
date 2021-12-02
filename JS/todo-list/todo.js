const form = document.getElementById('todoform');
const todolist = document.getElementById('lista');

form.onsubmit = function (e) {
	e.preventDefault();
  const inputTarefa = document.getElementById('inputTarefa');
  criar(inputTarefa.value);
  form.reset();
}

function criar(task) {
  const listaElemento = document.createElement('span');
  const tarefa = document.createTextNode(task);
  const quebralinha = document.createElement('br');


  listaElemento.appendChild(tarefa);
  listaElemento.appendChild(quebralinha);
  todolist.appendChild(listaElemento);

}
