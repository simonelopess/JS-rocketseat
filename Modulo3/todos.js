var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// var todos = [
//   'Fazer café',
//   'Estudar Javascript', 
//   'Acessar comunidade Rocketseat'
// ];

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
  listElement.innerHTML = ''; //exclui elementos da lista

  for (todo of todos){
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);

    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo('+pos+')')

    todoElement.appendChild(todoText); //joga li na lista
    todoElement.appendChild(linkElement);//adiciona o link excluir
    listElement.appendChild(todoElement); //joga lista na div
  }
}

renderTodos();

function addTodo(){

  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
  todos.splice(pos, 1); //exclui na posição pos , quantidade 1 de item
  renderTodos();
  saveToStorage();
}

function saveToStorage(){
  
  localStorage.setItem('list_todos', JSON.stringify(todos)); //converter em string
}