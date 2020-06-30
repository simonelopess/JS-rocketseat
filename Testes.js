var textElement = document.querySelector('#app textarea');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');




buttonElement.addEventListener("click", Buscar);
   
function Buscar(){
  var cep = inputElement.value;
  axios
  .get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
  .then(response => {
    var cepconsult = response.data;
    var myJson = JSON.stringify(cepconsult);
    console.log(myJson);
    inputElement.value = "";
    textElement.value = myJson;
  })
  .catch(error => {
    alert("Não foi possível efetuar a busca!");
    renderError(error);
  });


}

    