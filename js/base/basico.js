/*PRIMEIRO CONTATO*/

/*Alerta - estrutura*/
/*alert("")*/
/*Dá um alerta na tela*/
// alert("Hello World")

/*CONSOLE*/

/*Console - estrutura*/
/*console.log("")*/
/*Imprimi algo no console(Inspecionar > Console)*/
// console.log("Olá Mundo")

/*VARIÁVEIS*/

/*Declaração var*/
// var a;

/*a recebe HD*/
// a = "HD";

/*a recebe Placa de Captura*/
// a = "Placa de Captura";

/*Imprimi o contéudo que a recebeu por último(Placa de Captura)*/
// console.log(a);

/*TIPOS DE DADOS*/

/*String*/
/*Cadeia de caracteres*/
/*Preto no console*/
/* var string = "Palavra";

console.log(string); */

/*String com valor numérico realiza 
operações com number*/

/*Number*/
/*Números*/
/*Azul no console*/
/* var number = 3;

console.log(number); */

/*Undefined*/
/*Não se sabe o que tem na variável*/
/*Cinza no console*/
/* var undefined;

console.log(undefined); */

/*Null*/
/*Se sabe que não tem nada na variável*/
/*Cinza no console*/
/* var nulo = null;

console.log(nulo);*/

/*Boolean*/
/*Verdadeiro ou falso*/
/*Azul no console*/
/* var boolean = true;

console.log(boolean); */

/*OPERAÇÕES ARITMÉTICAS*/

/*Adição*/
/* var a = 10;
var b = 15;
var c = a + b;

console.log(c); /*

/*Subtração*/
/* var d = 30;
var e = 15;
var f = d - e;

console.log(f); /*

/*Multiplicação*/
/* var g = 2;
var h = 3;
var i = g * h;

console.log(i); /*

/*Divisão*/
/* var j = 30;
var k = 15;
var l = j / k;

console.log(l); /*

/*Módulo*/
/* var m = 10;
var n = 3;
var o = m % n;

console.log(o); /*

/*Incremento*/
// var p = 30;
/*Incremento antes da variável*/
/*Incrementa p depois q recebe p*/
// var q = ++p;

/*Incremento depois da variável*/
/*q recebe p depois incrementa p*/
// var q = p++;

// console.log(q);

/*Decremento*/
// var r = 15;
/*Decremento antes da variável*/
/*Decrementa r depois s recebe r*/
// var s = --r;

/*Decremento depois da variável*/
/*s recebe r depois decrementa r*/
// var s = r--;

// console.log(s);

/*ATRIBUIÇÕES*/

/*Adição simplificada*/
/* var a = 30;
var b = 5;
a += b;

console.log(a); */

/*Subtração simplificada*/
/* var c = 15;
var d = 5;
c -= d;

console.log(c); */

/*Multiplicação simplificada*/
/* var e = 5;
var f = 5;
e *= f;

console.log(e); */

/*Divisão simplificada*/
/* var g = 30;
var h = 5;
g /= h;

console.log(g); */

/*Módulo simplificado*/
/* var i = 30;
var j = 17;
i %= j;

console.log(i); */

/*OPERADORES COMPARATIVOS*/

/*Comparação de igualdade entre valores*/
/*Compara os valores - ==*/
// var a = 3;
// var b = 3;

/*Imprimi true porque 3(number) é igual a 3(number)*/
// console.log(a == b);

/*Comparação de igualdade entre valores e tipos*/
/*Compara a igualdade entre os valores e tipos - ===*/
// var c = 3;
// var d = "3";

/*Imprimi false porque 3(number) é diferente de 3(string)*/
// console.log(c === d);

/*Comparação de diferença entre valores*/
/*Compara a diferença entre os valores - !=*/
// var e = 3;
// var f = 3;

/*Imprimi false porque 3(number) não é diferente de 3(number)*/
// console.log(e != f);

/*Comparação de diferença entre valores e tipos*/
/*Compara a diferença entre os valores e tipos - !==*/
// var g = 3;
// var h = "3";

/*Imprimi true porque 3(number) é diferente de 3(string)*/
// console.log(g !== h);

/*Comparação - maior que(>)*/
/*Primeiro maior que o segundo - true*/
/*Primeiro menor que o segundo - false*/
// var i = 4;
// var j = 3;

// console.log(i > j);

/*Comparação - menor que(<)*/
/*Primeiro maior que o segundo - false*/
/*Primeiro menor que o segundo - true*/
// var k = 4;
// var l = 3;

// console.log(k < l);

/*Comparação - maior ou igual a que(>=)*/
/*Primeiro maior ou igual que o segundo - true*/
/*Primeiro menor que o segundo - false*/
// var m = 2;
// var n = 3;

// console.log(m >= n);

/*Comparação - menor ou igual a que(<=)*/
/*Primeiro maior que o segundo - false*/
/*Primeiro menor ou igual que o segundo - true*/
// var o = 3;
// var p = 3;

// console.log(o <= p);

/*OPERADORES LÓGICOS*/

/*Lógico - AND(&&)*/
/*Todas as condições tem que ser verdadeiras*/
/* var a = true;
var b = false;
var c = a && b;

console.log(c); */

/*Lógico - OR(||)*/
/*Uma condição tem que ser verdadeira*/
/* var d = true;
var e = false;
var f = d || f;

console.log(f); */

/*Lógico - NOT(!)*/
/*True > False*/
/*False > True*/
/* var g = true;
var h = false;
var i = !g; 

console.log(i); */


/*Exemplo - AND*/

// var idade = 35;

// var maior20 = idade > 20;
// var menor30 = idade < 30;
// var entre = maior20 && menor30;

// console.log("Idade", idade);
// console.log("Maior que vinte", maior20);
// console.log("Menor que trinta", menor30);
/*Imprimi false porque nem todas as condições 
são verdadeiras(menor30)*/
// console.log("Entre vinte e trinta", entre); 

/*Exemplo - OR*/

// var idade2 = 5;

// var menor10 = idade2 <= 10;
// var maior65 = idade2 >= 65;
// var gratuidade = menor10 || maior65;

// console.log("Idade", idade2);
// console.log("Menor que 10", menor10);
// console.log("Maior que 65", maior65); 
/*Imprimi true porque uma das condições 
é verdadeira(menor10)*/
// console.log("Tem direito a gratuidade", gratuidade);

/*Exemplo - NOT*/

// var idade3 = 15

// var maior25 = idade3 >= 25;
// var menor25 = !maior25;

// console.log("Maior que 25", maior25);
/*Imprimi true porque a condição(maior25)
é falsa*/
// console.log("Menor que 25", menor25);

/*STRINGS*/

/*Aspas dupla fora e simples dentro - " '' "*/
/*Aspas simples fora e dupla dentro - ' "" '*/
/* var str = "Aspas dupla 'aspas simples' aspas dupla";
var str2 = 'Aspas simples "aspas dupla" aspas simples';

console.log(str);
console.log(str2); */

/*Concatenação - +*/
/*Concatenação simplificada - +=*/
/* var str3 = "Concat";
str3 += "enação";

console.log(str3); */

/*STRINGS EM NÚMEROS*/

/*parseInt()*/
/*Transforma a string com valor númerico inteiro
em um number inteiro*/
/* var a = "3";
var b = "5";
var c = parseInt(a) + parseInt(b);

console.log(c); */

/*parseFloat()*/
/*Transforma a string com valor númerico decimal
em um number decimal*/
/* var d = "3.1";
var e = "5";
var f = parseFloat(d) + parseFloat(e);

console.log(f); */

/*ALERT & PROMPT*/

/*Prompt - estrutura*/
/*prompt("")*/
/*Dar um alerta com caixa de texto na tela*/
// var nome = prompt("Seu nome:");

/*Alert - estrutura 2 & 3*/
/*alert(váriavel)*/
/*alert(texto, váriavel)*/
// alert("Bom dia, " + nome);

/*ESTRUTURAS CONDICIONAIS*/

var idade = 40;

/*Condicional - if*/
/*Checa se a primeira condição é verdadeira ou falsa
e imprimi ou não algo de acordo com a resposta*/
/* if (idade >= 18 && idade <= 35)
{
    console.log("Pode");
    console.log("Mostre a identidade");
} /*

/*Condicional - else if*/
/*Se usa quando tem mais de uma condição*/
/* else if (idade > 35)
{
    console.log("Pode");
    console.log("Faça seu pedido");
} /*
    
/*Condicional - else*/
/*Não tem () do lado, é o que imprimi se
nenhuma condição for verdadeira*/
/* else 
{
    console.log("Não pode");
    console.log("Volte futuramente");
} /*

/*Bloco de comando - {}*/
/*Se usa quando tem mais de uma linha de comando*/

/*OPERADOR TERNÁRIO*/

// var idade = 20;

/*Ternário - estrutura 1 & 2*/
/*váriavel operador number ? console.log("") : console.log("")
/*váriavel operador váriavel ? true : false*/
/*Checa condições de uma maneira simplicada*/
// idade >= 18 ? console.log("Pode") : console.log("Não pode")

/*ESTRUTURAS CONDICIONAIS 2*/

/* var nota1 = 5.0;
var nota2 = 5.8;

var media = (nota1 + nota2) / 2;
var conceito = "";

if(media >= 9)
    conceito = "Ótimo";
else if(media >= 8)
    conceito = "Bom";
else if (media >= 7)
    conceito = "Regular";
else
    conceito = "Reprovado";

console.log(media);
console.log(conceito); */

/*Switch - estrutura*/
/*switch(váriavel){
    case "":
        console.log("");
        break; // Faz uma quebra para que não imprima
    os próximos casos
    ...
}*/
/*Checa em qual caso a váriavel se encaixa*/
/* switch(conceito){
    case "Ótimo":
        console.log("Parabéns, Einstein!");
        break;
    case "Bom":
        console.log("Quase perfeito!");
        break;
    case "Regular":
        console.log("Pode melhorar");
        break;
    case "Reprovado":
        console.log("Não passou");
        break;
    /*Se a váriavel não se encaixar em nenhum dos casos
    vai ser impresso esse caso(padrão)
    default:
        console.log("Houve algum erro");
} */

/*ESTRUTURAS DE REPETIÇÃO*/

// var numero = 5;
// var i;

/*For - estrutura*/
/*for(iterador = 0; i < váriavel; iterador++)
{
    console.log("");
}*/
/*Realiza uma repetição(loop) uma quantidade de vezes
até o number indicado na váriavel*/
/*Iterador - realiza a contagem da quantidade de vezes 
que o loop ocorre até ser interrompido*/
/* for(i = 0; i < numero; i++)
{
    console.log("Executando o for, pela " + i + "Vez");
}

console.log("Acabou");

/*While - estrutura*/
/*while(váriavel < 10)
{
    console.log("");
    váriavel++;
}*/
/*Realiza uma repetição(loop) uma quantidade de vezes
até a condição deixar de ser verdadeira*/
/* while(numero < 10){
    console.log("Número " + numero);
    numero++;
}

console.log("Terminou"); */

/*ARRAYS*/

/*Array - estrutura*/
/*["", "", "", ...]*/
/*É uma estrutura de dados que pode armazenar
vários dados em sequencia*/
/*Length - tamanho do array*/
// var alunos = ["Pedro", "Igor", "José", "Marcos", "Mariana"];

/*O número entre colchetes indica a posição do array*/
/*Todo array começa pela posição 0*/
/*Imprimi o dado corresponde a posição 0*/
// console.log(alunos[0]);

/*Exemplo*/

// var alunos2 = ["Igor", "José", "Marcos", "Mariana", "Joana", "William"];
// var i;

/*Forma simplificada de varrer o array - in/of*/
/*Se fosse of no lugar do in imprimiria todos os elementos
como undefined*/
// for(i in alunos2)
// {
/*Imprimi os elementos do array*/
/*Caso fosse apenas i, imprimiria as posições(0, 1, 2, 3, 4, 5) do
array*/
/*Aí seria necessário usar of invés de in para pegar os elementos
em cada posição do array*/
// console.log(alunos2[i]);
// }

/*FUNÇÕES*/

/*Função - estrutura da declaração da função*/
/*function nome(argumentos) {
    váriavel 1 = ;
    váriavel 2 = ;
    váriavel 3 = ;
    console.log(váriavel 3);

    return váriavel 3;
}
/*Dá um apelido para um bloco de comando e quando esse apelido
é chamado o que tem dentro do bloco é realizado*/
/* function media(n1, n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    /*Imprimi a média na tela*/
// console.log(media);

/*Retorna a média para execução*/
// return media;
// }

/*Execução da função*/
// var resultado1 = media(/*n1 = */6, /*n2 =*/7);
// var resultado2 = media(8, 7);

// console.log(resultado1);
// console.log(resultado2);

/*FUNÇÕES 2*/

/*Sem os parenteses dá erro*/
/* function saudacao() {
    return "Olá Mundo!"
} */

/*Sem os parenteses imprimi a função em si e s se torna a função também,
ou seja, imprimindo s() a função é executada*/
/* var s = saudacao();


console.log(s); */

/*Função anônima - estrutura*/
/*var nome = function (argumentos){
    return argumentos;
}*/
/* var media = function (n1, n2){
    return (n1 + n2) / 2
} */

/*Função direto no console.log*/
// console.log(media(5, 6));

/*JUNTANDO TUDO ATÉ AQUI*/

/* var nomes = ["Igor", "José", "Maria"];
var notasA = [7.0, 7.0, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(media) {
    
    if(media >= 7){
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}

for(var index = 0; index < nomes.length; index++){

    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);

    console.log(nomes[index] + 
                " - " +
                nota1 +  
                " - " +      
                nota2 +
                " - " +
                m +
                " - " +
                passou(m)
                );
} */

/*OBJETOS - PROPRIEDADES*/

/*Objeto - estrutura*/
/*váriavel = {propriedade: "", 
              propriedade 2: number, 
              ...}
*/
/*Lembra um array, mas ao invés de abrir colchetes abre chaves*/
/*E também coloca todas as informações em uma única váriavel*/
/* var aluno = {
             // Propriedades
             // Váriavies de um objeto
             nome: "Igor", 
             nota1: 7.5,
             nota2: 9.0
            }
*/
/*Imprimi a propriedade nome do objeto contido na váriavel aluno*/
/*Ao invés de usar um index[0] como no array, 
usa uma chave(.nome)(["nome"])*/
/* console.log(aluno.nome);
console.log(aluno["nota1"]); */

/*Adiciona as propriedades matricula, sobrenome e pai
ao objeto contido na váriavel aluno*/
/* aluno.matricula = 12345;
aluno["sobrenome"] = "Oliveira";
var pai = "Pai";
aluno[pai] = "Osvaldo"; */

/*Imprimi a váriavel aluno inteira com as 
chaves matricula, sobrenome e pai adicionadas ao objeto*/
// console.log(aluno);

/*OBJETOS - MÉTODOS*/

/*Método*/
/*Função de um objeto*/
/*Dentro de uma váriavel ou com um apelido*/
/* var calcMedia = function(n1, n2){
    return (n1 + n2) / 2;
} */

/* var aluno = {
    nome: "Igor",
    notas: [8, 8],

    /*Chave media com a função calcMedia como valor*/
// media: calcMedia
// }

/* var aluno1 = {
    nome: "João",
    notas: [6, 8],

    /*this se refere ao objeto contido em aluno1 ao qual o método
    media pertence*/
/* media: function(){
    return (this.notas[0] + this.notas[1]) / 2;
}
} */

/* console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media()); */

/*OBJETOS - CONSTRUTORES*/

/*Construtores*/
/*Criam objetos*/
// Duas formas de criar um objeto com uma função:
/* function criarAluno(nome, n1, n2){
    return{
        nome: nome,
        nota1: n1, 
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

function aluno(nome, n1, n2){
    
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){
        return (this.nota1 + this.nota2) / 2;
    }
} */

/*Criando alunos com função criarAluno*/
// var turma = [
    // criarAluno(/*nome = */"Igor", /*n1 =*/9, /*n2 = */6),
    // criarAluno("João", 7, 4)
// ]

/* var aluno = turma[1]

console.log(aluno);
console.log(aluno.media()); */

/*Criando alunos com a função aluno*/
// var a = new aluno(/*nome = */"Igor", /*n1 = */8, /*n2 = */7);
// console.log(a.media());

/*Duas formas de imprimir os elementos dentro da váriavel turma*/
/* for(var aluno of turma) {
    console.log(aluno.nome + " - " + aluno.media());
}

turma.forEach (function(elemento){
    console.log(elemento);
}) */

/*OBJETOS - RESUMO*/

/*Jeitos de criar um objeto*/
/*Jeito A*/
/* var a = {
    nome: "Igor",
    sobrenome: "Oliveira"
}

/*Imprimir propriedade específica 1*/
// console.log(a.sobrenome);

/*Jeito B*/
/* function obj(n, s){
    return{
        nome: n,
        sobrenome: s
    }
}

var b = obj("Igor", "Oliveira"); */

/*Imprimir propriedade específica 2*/
// console.log(b["nome"]);

/*Jeito C*/
/* function objeto(n, s){
    this.nome = n;
    this.sobrenome = s;
}

var c = new objeto("Igor", "Oliveira");
console.log(c); */

/*DATAS*/

/*Data de agora*/
/* var d = new Date();

console.log(d); */

/*Data específica*/
/*year, month, day, hours, minutes, seconds, milliseconds*/
/*Apenas um número será milliseconds*/
/* var e = new Date(2018, 8, 12);

console.log(e); */

/*Multiplicação com milliseconds*/
/*1000 milliseconds * 60 = 60000 milli = 60 seconds = 1 minute*/
/*60000 milli * 5 = 300000 milli = 300 seconds = 5 minutes*/ 
/* var f = new Date(1000 * 60 * 5);

console.log(f); */

/*String - estrutura*/
/*"month(3 letras/número) day year hour:minute"*/
/*Entre hifens também funciona*/
/*Só o year imprimi o último day do ano anterior*/
/* var g = new Date("sep 05 2017");

console.log(g); */

/*Métodos*/
// var h = new Date("05-15-1999");

/*Imprimi o year*/
// console.log(h.getFullYear());

/*Imprimi o day*/
// console.log(h.getDate());

/*Imprimi o day da semana em posição*/
// console.log(h.getDay());

/*Imprimi as hours*/
// console.log(h.getHours());

/*Imprimi os minutes*/
// console.log(h.getMinutes());

/*Imprimi os seconds*/
// console.log(h.getSeconds());

/*Imprimi os milliseconds*/
// console.log(h.getMilliseconds());

/*Imprimi o month*/
// console.log(h.getMonth());

/*Imprimi os milliseconds desde a data inicial(dec 31 1969 00:00:00)*/
// console.log(h.getTime());

/*Muda o year*/
// console.log(h.setFullYear(2010));

/*Muda o day*/
// console.log(h.setDate(20));

/*Muda o day da semana em posição*/
// console.log(h.setDay());

/*Muda as hours*/
// console.log(h.setHours());

/*Muda os minutes*/
// console.log(h.setMinutes());

/*Muda os seconds*/
// console.log(h.setSeconds());

/*Muda os milliseconds*/
// console.log(h.setMilliseconds());

/*Muda o month*/
// console.log(h.setMonth());

/*Muda os milliseconds desde a data inicial(dec 31 1969 00:00:00)*/
// console.log(h.setTime());

/*CONST, LET & VAR*/

/*Váriavel global*/
/*Pode ser acessado de qualquer lugar*/
// var numero1 = 4;
/*Const e let tem um escopo local*/
/*Ou seja uma vez colocados dentro de um bloco, só podem ser acessados
de dentro do bloco e não de fora dele*/
// let numero2 = 5;
/*Constante*/
/*Uma vez que foi atribuido um valor a ela, 
não se pode atribuir mais nada*/
/* const numero3 = [4];
const pessoa = {}; */

/*Serve pra adicionar um novo elemento no array*/
// numero3.push(7);
/*Adiciona uma propriedade e um elemento no objeto*/ 
/* pessoa.nome = "Igor";

{
    var casal = "Foda";
    let lud = "LetLud";
    const casamento = "Sabe muito";
} */

/* console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(pessoa);
console.log(casal); */
/*Dá erro porque eles estão dentro de um bloco e o console.log fora*/
// console.log(lud);
// console.log(casamento);





















