

var nome = "Diego";
var idade = 23;

var alunos= ['Diego', 'Gabriel', 'Lucas'];

var aluno = {
  nome: 'Diego',
  idade: 23,
  peso: 80.5
}

console.log('Hello World');
console.log(aluno);
console.log(aluno.idade)


/*OPERAÇÕES MATEMÁTICAS*/

var x = 10,
    y = 20;  //quando a variavel é declarada, não é necessário usar a palavra VAR várias vezes, basta separar por vírgula;

    var resultado = x + y;
    console.log(resultado);


    /*FUNÇÕES*/

    function soma(numero1, numero2){
      var result = numero1+numero2;
        return result;
    }

    var resultado = soma(1,2);
    console.log(resultado);

    /*CONDICIONAIS*/

    function retornaSexo(sexo){
      if(sexo === 'M' || sexo === 'm'){
        return "Masculino"
      } else if(sexo === 'F' || sexo === 'F'){
        return "Feminino"
      } else {
        return 'Outro'
      }
    }

    var resultado = retornaSexo('F')
    console.log(resultado);

    /*SWITCH*/
    function returnSexo(sexo){
      switch(sexo){
        case 'M':
          return 'Masculino';
        case 'F':
          return 'Feminino';
        default: 'Outro'
      }
    }

    var result = returnSexo('M')
    console.log(result);

    /*Operadores lógicos*/

    var sexo = 'M', idade = 23;

    if(sexo === 'M' && idade >=18){
      console.log('Ok');
    }



    /*OPERADOR NOT*/

    if(sexo !== 'M'){
      console.log('Ok');
    }

    /*Condição ternária*/

    var sexo = 'M';

    // if(sexo === 'M'){
    //   return 'Masculino'
    // } else {
    //   return 'Feminino'
    // }

    //Poderia ser resumido em

    var retorno = (sexo === 'F')? 'Masculino' : 'Feminino';
    console.log(retorno);

    /*Estrutura de repetição */

    //usar quando souber o tamanho do intervalo
    for(var i = 0 ; i<=100; i++){
      console.log(i);
    }

    var j = 21511126;
    while(j>50){
      console.log(j);
      j /=5;
    }


    /*INTERVALO e TIMEOUT*/

    //executa a cada intervalo de tempo
    //quando não é usado o () ao chamar a função, ela não é executada, apenas referenciada

    function exibeAlgo(){
      console.log('Hello World');
    }

    // setInterval(exibeAlgo, 1000);

    //settimeout
    // setTimeout(exibeAlgo, 5000);