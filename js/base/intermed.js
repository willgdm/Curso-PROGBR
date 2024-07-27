/*WINDOW*/

/*Objeto padrão*/
/*Qualquer propriedade ou método do window 
pode ser chamada sem colocar o window*/
/*Funcionam da mesma forma*/
/* window.console.log("Teste");
console.log("Outro teste"); */

/*Métodos importantes do window*/
/*alert()*/
/*console.log()*/

/*DOCUMENT*/

/*Atráves da propriedade document do objeto window
é possível acessar o HTML*/
/* console.log(document);
window.console.log(document); */

/*DOCUMENT 2*/

/*DOM - Document Object Model*/
/*As tags HTML podem ser transformadas em objetos JS*/
/*Imprimi HTML inteiro*/
// console.log(document);
/*Imprimi apenas o body*/
// console.log(document.body);
/*innerHTML - propriedade*/
/*Nesse caso, transforma o conteúdo do body em string*/
/*E concatena uma nova string que tem formato de tag HTML
com o com o que o body já tinha*/
// console.log(document.body.innerHTML = "<h1>Esse título foi inserido no JS" + document.body.innerHTML);

/*ACESSANDO ELEMENTOS HTML COM JS*/

/*Acessa o elemento HTML pelo id dele*/
// let p1 = document.getElementById("p1");

/*Imprimi o elemento parágrafo com o id "p1"*/
// console.log(p1);

/*Acessa os elementos HTML pela class deles*/
// let paragrafos = document.getElementsByClassName("paragrafo");

/*Imprimi um array com os elementos parágrafos 
com a class "paragrafo"*/
// console.log(paragrafos);

/*Imprimi os elementos parágrafos com a class
com a class "paragrafo"*/
/* for(let p of paragrafos){
    console.log(p)
} */

/*Acessa os elementos HTML pela tag deles*/
// let th = document.getElementsByTagName("h1");

/*Imprimi um array com os elementos h1*/
/*Informando a posição imprimi o elemento h1 especificado*/
// console.log(th[0]);

/*MODIFICANDO ELEMENTOS*/

// let pId = document.getElementById("p1");

/*Muda o texto que aparece na tela*/
/*Se o texto for uma tag HTML aparece 
um elemento HTML em si*/
/*Nesse caso, muda de Parágrafo 1 para Título 3
como um h3 mesmo*/
// pId.innerHTML = "<h3>Título 3</h3>";

// console.log(pId);

// let pClass = document.getElementsByClassName("paragrafo");

/*Também muda o texto que aparece na tela*/
/*Porém se o texto for uma tag HTML aparece como
tá escrito e não um elemento HTML em si*/
/*Mostra o texto que aparece na tela*/
/* pClass.innerText = "Conteúdo mais novo";

console.log(pClass);

let pTag = document.getElementsByTagName("p"); */

/*Também muda o texto que aparece na tela*/
/*Porém se o texto for uma tag HTML aparece como
tá escrito e não um elemento HTML em si também*/
/*Mas mostra o texto que aparece no HTML
e não na tela*/
/* pTag.textContent = "Mais novo ainda";

console.log(pTag);

let pClass2 = document.getElementById("p4"); */

/*Muda o nome da class do elemento*/
/* pClass2.className = "";

console.log(pClass2);

let pStyle = document.getElementById("p5"); */

/*Muda ou dá um estilo ao elemento*/
/* pStyle.style = "color:green";

console.log(pStyle);

let pMeuAtt = document.getElementById("p6"); */

/*Pega um atributo do elemento*/
/*Nesse caso, é um atributo criado*/
// let meuAtt = pMeuAtt.getAttribute("meuAtt");

/*Imprimi o elemento que tem o atributo criado meuAtt*/
// console.log(pMeuAtt);
/*Imprimi o valor do atributo criado meuAtt*/
// console.log(meuAtt);

/*Muda o valor do atributo criado meuAtt*/
// pMeuAtt.setAttribute("meuAtt", "Outro nome");
/*Cria um novo atributo chamado novoAtt
com o valor "Qualquer coisa"*/
// pMeuAtt.setAttribute("novoAtt", "Qualquer coisa");






