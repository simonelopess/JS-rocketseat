function checaIdade(idade) {
  return new Promise(function(resolve, reject){
    if(idade>18){
      resolve();
    } else{
      reject('Erro na requisição');
    }
  })
}
 checaIdade(10)
  .then(function() {
  console.log("Maior que 18");
  })
  .catch(function() {
  console.log("Menor que 18");
  });