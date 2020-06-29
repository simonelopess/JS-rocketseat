// Exercício 1
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
 };
 
// Exercício 2
 
 const { rua, numero, bairro, cidade, uf } = endereco;
 console.log(`O usuário mora em ${cidade} / ${uf}, no bairro
 ${bairro}, na rua "${rua}" com nº ${numero}.`);


const pares = (x, y) =>{
  for(var i = x; i <= y;i++){
    if(i%2===0){
      console.log(i)
    }
  }
}

pares(32,321)


// Exercício 3

function temHabilidade(skills) {
  if(skills.indexOf("Javascript") !== -1){
    console.log('Tem a Skill');
  } else {
    console.log('Não tem a Skill');
  }
}
 var skills = ["Javascript", "ReactJS", "React Native"];
 temHabilidade(skills); // true ou false


//  Exercício 4

function experiencia(anos){
  if(anos>1 && anos<3){
    console.log(`${anos} anos de experiência é: Intermediário `);
  } else if (anos>3 && anos<6){
    console.log(`${anos} anos de experiência é: Intermediário `);
  } else if(anos>= 7){
    console.log(`${anos} anos de experiência é: Avanãdo `);
  } else {
    console.log(`${anos} anos de experiência é: Jedi `);
  }
}

var anosEstudo = 2;
experiencia(anosEstudo);


// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master


//Exercício 5

var usuarios = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];

 function Dados(){
   usuarios.forEach(user => {
    console.log(`O ${user.nome} possui as habilidades ${user.habilidades}`)
   });
 }
Dados();

