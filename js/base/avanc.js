/*STRICT MODE*/

/*Deixa obrigatória a declaração de váriavel*/
// "use strict"

// var x = 7;

/*Cria a declaração de váriavel*/
// z = 8;


/* function imprimir(){

    var y = 9;
    console.log(y);
} */

// function impresso(){

/*Cria a declaração de váriavel fora da função*/
/* c = 10;
console.log(c)
} */

/*Imprimem no window e no console*/
/* console.log(x);
console.log(z);

imprimir();
impresso(); */

/*Escopo local*/
/*Não imprimi no console e no window y porque ele só
existe dentro da função imprimir e a váriavel
está declarada*/
// console.log(y);

/*Escopo global*/
/*Imprimi no window e no console c porque mesmo
estando dentro da função a váriavel não está
declarada e é criada fora da função*/
// console.log(c);

/*Imprimi o window*/
// console.log(window);

/*THIS & BIND*/

/* function speakGeneric(){
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

dog.speak();
cat.speak(); */

/*Bind - estrutura*/
/*let nome = função.bind(contexto)*/
/*Dá contexto ao this*/
// let bindedFunction = speakGeneric.bind(/*this =*/dog);

/*nome()*/
/*Executa a função bind*/
// bindedFunction();

/*ARROW FUNCTIONS*/

/*Arrow function - estrutura*/
/*let nome = () => {
    console.log();
}
/*Assim como a função anonima vai ser colocado dentro
de uma váriavel*/
/*Se tiver só um argumento não precisa dos parenteses
no argumento*/
/*Se a única coisa que a função esteja fazendo é retornar
um valor, não precisa das chaves e nem do return*/
/* let dobro = (x) => {
    console.log(2 * x)
}

dobro(7); */

/*Não entende o this*/
/*O bind não funciona*/
/*O this nesse caso é o objeto window porque ele
fica sem contexto*/
/* let triplo = () => 2 * this.y;

let numero = {
    y: 8,
    d: triplo
} */

/*Imprimi NaN = Not a Number*/
// console.log(numero.d());

/*CALLBACK*/

// let usuarios = ["Adriano", "Marcia", "José"];

/*Callback - estrutura*/
/*function nome(argumento, callback){
    setTimeout(() => {
        váriavel.função(argumento)
        callback();
    }, 1000);
}*/
/*Serve pra simular algum evento que não é em tempo real*/
/*Fazer uma função sem delay executar depois de
uma função com delay*/
// function inserirUsuario(nome, /*listarUsuarios =*/callback){

// setTimeout(() => {
// usuarios.push(nome)
/*Executando listarUsuarios junto no intervalo
e depois do push*/
/* callback();
}, 1000);
}

function listarUsuarios(){
console.log(usuarios);
} */

/*Uma função como o valor de um argumento de outra*/
// inserirUsuario("Igor", listarUsuarios);

/*PROMISE*/

// let alunos = ["Igor", "Rodrigo", "Ana"];

// function inserirAluno(nome){

/*Promise - estrutura*/
/*let promise = new Promise(function(resolve, reject){

    setTimeout(() => {
        nome.push(argumento);

        let error = false;
        if(!error){
            resolve();
        }else{
            reject("Erro");
        }
    }, 1000);


})
return promise;
} */
/* let promise = new Promise(function(resolve, reject){

    setTimeout(() => {
        alunos.push(nome);

        let error = false;
        if(!error){
            resolve();
        }else{
            reject("Erro");
        }
    }, 1000);


}) */
/*Retorna a promise pra poder executar a função
dentro do then*/
/* return promise;
}

function listarAlunos(){
console.log(alunos);
} */

/*O then faz com que a função só seja executada
depois que a promise for retornada*/
// inserirAluno("William").then(listarAlunos);

/*ASYNC AWAIT*/

/* let favs = ["Messi", "Curry", "Mahomes"];

function inserirFav(nome){

    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            favs.push(nome);
            let error = false;

            if(!error){
                resolve();
            }else{
                reject("Erro");
            }
        }, 1000);
    })
    return promise;

}

function listarFavs(){
    console.log(favs);
} */

/*Async Await - estrutura*/
/*async function nome(){
    await função(valor);
    função2();
}*/
/*Uma outra maneira de usar promises*/
/* async function executar(){
    await inserirFav("Kelce");
    listarFavs();
}

executar(); */

/*FILTER*/

/* function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
];

function temMenosde30(aluno){
    return aluno.idade < 30;
} */

/*Filter - estrutura*/
/*let nome = váriavel.filter(função);*/
/*Filtra os valores de acordo com um callback*/
/* let alunosComMenosde30 = alunos.filter(temMenosde30);

console.log(alunosComMenosde30); */

/*MAP*/

/* function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
];

function nomeIdade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos";
} */

/*Map - estrutura*/
/*let nome = váriavel.map(função);*/
/*Cria um novo array totalmente diferente com base
no array principal*/
/* let valores = alunos.map(nomeIdade);

console.log(valores); */

/*VALOR VS REFERÊNCIA*/

// function novoAluno(nome, idade){
//     return {nome, idade}
// }

// let alunos = [
//     novoAluno("Mario", 23),
//     novoAluno("José", 45),
//     novoAluno("Marcia", 29),
//     novoAluno("João", 35)
// ];

// function nomeIdade(aluno){
//     return aluno.nome + " tem " + aluno.idade + " anos";
// }

// let valores = alunos.map(nomeIdade);

// console.log(valores);

/*Referência*/
/*Quando se atribui uma váriavel com valor do tipo
não primitivo a outra, a segunda passa a ser referencia
pra primeira*/
/*Ou seja, se a segunda for modificada
a primeira também é*/
// let alunoA = {nome: "Igor", idade: 15};

/*Maneira de fazer uma cópia de uma váriavel
com um objeto como valor*/
/* let alunoB = Object.assign({}, alunoA);
let alunoE = {...alunoA};

alunoB.idade = 25;
alunoE.idade = 45;

let turmaC = ["William", "Lud", "Allan"]; */

/*Maneiras de fazer uma cópia de uma váriavel
com um array como valor*/
/* let turmaD = turmaC.slice();
let turmaE = [...turmaC];

turmaD.push("Alvinho");
turmaE.push("Jota"); */

/*Valor*/
/*Quando se atribui uma váriavel com valor do tipo
primitivo a outra, a segunda passa a ter o valor
da primeira*/
/*Ou seja, se a segunda for modificada
a primeira não é*/

/* let idadeA = 15;

let idadeB = idadeA;

idadeB = 10; */

/*SPREAD OPERATOR*/

/* var pessoa = {
    nome: "José Silva",
    idade: 32,
    time: "KC",
}

var contato = {
    telefone: 8765432,
    email: "jose@gmail.com",
} */

/*Spread Operator - estrutura*/
/*var nome {
    ...váriavel,
    ...váriavel2,
} */
/*É possível juntar objetos*/
/* var copia = {
    ...pessoa,
    cidade: "Rio de Janeiro",
    ...contato,
}

copia.idade = 88;

console.log(pessoa);
console.log(copia); */

/*DESESTRUTURANDO UM OBJETO*/

/* var aluno = {
    matricula: 1234,
    nome:"Marcos",
    telefone: 98765432,
    cidade: "Barra do pirai",
} */

/*Para desestruturar um objeto é preciso respeitar
os nomes da propriedades e não usar um nome qualquer*/
// var {matricula, nome} = aluno;
/*Outra maneira de fazer uma copia*/
/*É possível separar propriedades específicas da copia*/
/* var {cidade, ...copia} = aluno;

copia.matricula = 5678;

console.log(matricula);
console.log(nome);
console.log(copia);
console.log(aluno); */

/* var aluno1 = {
    matricula: 1357,
    nome: "Pedro",
    telefone: 987654,
    cidade: "Curitiba"
}

var aluno2 = {
    matricula: 2468,
    nome: "João",
    telefone: 8743,
    cidade: "Baltimore"
}

var alunos = [aluno1, aluno2]; */

/*A posição é importante e não o nome, o que permite
usar qualquer nome*/
/*É possível separar arrays específicos dos outros*/
/* var [netinho, ...outros] = alunos;

console.log(netinho);
console.log(outros); */

/*REDUCE*/

/* function novoAluno(nome, idade){
    return {
        nome, idade
    }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35),
]

function idadeDaTurma(total, aluno) {
    return total - aluno.idade;
} */

/*Reduz todas as entradas de um array
em uma única entrada, a qual é um argumento e váriavel
em uma função*/
// console.log(alunos.reduce(idadeDaTurma, 200));

/*FETCH*/

/* let url = "API";*/

/*function converter(){
    let input = document.getElementById("valor");
    let valor = input.value;

    /*Fetch - estrutura*/
/*fetch(váriavel)
        .then((nome)=>{
            return nome.json()
        })
        .then((nome2)=>{
            console.log(nome2);
        })
/*Pega e utiliza os dados de uma API*/
/* fetch(url)
    .then((res) => {

        return res.json()

    })
    .then((data)=>{
        let rate = data.rates.BRL;

        document.getElementById("resultado").innerHTML = rate * valor;
    })
}*/









/*TRY CATCH*/

/*Try Catch - estrutura*/
/*try{
    console.log(váriavel não definida);
}catch(argumento){
    console.log("Mensagem de erro", erro);
} */
/*Tenta fazer algo*/

// let nome = "";

/* try{

    if(nome == ""){
        /*Lança um erro*/
/* throw "O nome não pode ser vazio";
}

console.log(nome); */
/*Se a tentativa der errado, trata o erro*/
/* }catch(err){
    console.log("Houve um erro", err); */
/*Independente de acontecer o erro ou não, ele 
fará algo*/
/* }finally{
    console.log("Boa noite");
} */



