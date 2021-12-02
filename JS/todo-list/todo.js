const form = document.getElementById('todoform');
const todolist = document.getElementById('lista');

form.onsubmit = function (e) {
	e.preventDefault();
  const inputTarefa = document.getElementById('inputTarefa');
  criar(inputTarefa.value);
  form.reset();
}

function criar(task) {


  const divElemento = document.createElement('div');
  const inputElemento = document.createElement('input');
  const labelElemento = document.createElement('label');

	divElemento.classList.add('form-check');
	inputElemento.classList.add('form-check-input');
	inputElemento.setAttribute('type','checkbox');

	inputElemento.setAttribute('name', task);
	inputElemento.setAttribute('id','flexCheckDefault');
	labelElemento.classList.add('form-check-label');
	labelElemento.setAttribute('for','flexCheckDefault');
  labelElemento.setAttribute('id',task);


	divElemento.appendChild(inputElemento);
	inputElemento.after(labelElemento);
	labelElemento.innerHTML = task;

	todolist.appendChild(divElemento);

}
