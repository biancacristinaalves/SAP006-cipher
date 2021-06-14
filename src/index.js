//importando o documento cipher.js nesse documento
import cipher from './cipher.js';


let NomeComeco = prompt("Qual seu nome?"); //mensagem do começo, para colocar o nome
document.getElementById("welcome").innerHTML = "Olá, " + NomeComeco + "!";

const codificarBotao = document.getElementById ("codificar"); //variavel + nome da variavel = buscar o elemento no html pelo id + id
codificarBotao.addEventListener("click",event => { //variavel + nome do evento + nome da função
    event.preventDefault() //evento + previne de recarregar a página
    let offset = document.getElementById("offset").value; //função de offset + buscar o elemento no html pelo id
    let mensagem = document.getElementById("mensagem").value; //função de mensagem + buscar o elemento no html pelo id
    let numOffset = parseInt(offset); //ele faz a inversão de texto para número
    document.getElementById("visualizar").innerHTML = cipher.encode(numOffset,mensagem); //pegar o elemento no html pelo id e "inserir" ele lá = documento cipher.js que faz a codificação
    console.log (codificarBotao) //pedir para imprimir na tela a variável
});


const decodificarBotao = document.getElementById ("decodificar");
decodificarBotao.addEventListener("click",event => {
    event.preventDefault()
    let offset = document.getElementById("offset").value;
    let mensagem = document.getElementById("mensagem").value;
    let numOffset = parseInt(offset);
    document.getElementById("visualizar").innerHTML = cipher.decode(numOffset,mensagem); //pegar o elemento no html pelo id e "inserir" ele lá = documento cipher.js que faz a decodificação
    console.log (decodificarBotao)
});

console.log(cipher);