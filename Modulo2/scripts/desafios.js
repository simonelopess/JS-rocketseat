
//Exercício 1
var botao = document.querySelector('button.botao');

botao.onclick = function(){
  var elementoCreado = document.createElement('div');
  elementoCreado.style.width = '100px';
  elementoCreado.style.height = '100px';
  elementoCreado.style.backgroundColor = '#350';
  elementoCreado.style.marginBottom = '10px';
  var containerElement = document.querySelector('#app');
  
  elementoCreado.onmouseover = function(){
  elementoCreado.style.backgroundColor = getRandomColor();
}

  containerElement.appendChild(elementoCreado);
}

//Exercício 2

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


//Exercício 3
var nomes = ["Diego", "Gabriel", "Lucas"];


function Lista(){
  var lista = document.querySelector('ul'); 
  nomes.forEach(x => {
    var itemLista = document.createElement('li'); //cria item lista
    lista.appendChild(itemLista);
    var textLista = document.createTextNode(x); //criar o conteudo pra inserir na lista
    itemLista.appendChild(textLista); //adiciona o conteúdo criado na lista
  }); 
}
Lista();


//Exercício 4

function adicionar(){
  var inputElement = document.querySelector('input[name=nome]');
  var text = inputElement.value;
  console.log(text);
  nomes.push(text); 
  Lista();
}