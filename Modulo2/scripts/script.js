function mostraAlerta(){
  alert('Botão foi clicado');
}


// var inputElement = document.getElementById('nome');
// var inputElement = document.querySelector('body div#app input');
// var inputElement = document.querySelector('input[name=nome');


var btnElement = document.querySelector('button.botao'); //pega todos os elementos button com classe botao
var inputElement = document.querySelector('input[name=nome]');



btnElement.onclick = function(){
  var text = inputElement.value;
  alert(text);
}

//criando elemento do tipo link
var linkElement = document.createElement('a');

//atribuindo um valor ao link
linkElement.setAttribute('href', 'http://www.simonesilva.com.br');

//vinculando um texto ao link criado
var textElement = document.createTextNode('Acessar site da RocketSeat');
linkElement.appendChild(textElement);

//enviar o link criado para o HTML

var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement); 

var inputElement2 = document.querySelector('#nome');
// containerElement.removeChild(inputElement2); //removendo valores com o método removechild  

