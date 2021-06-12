console.log(cipher);
import cipher from './cipher.js';


/*let NomeComeco = prompt("Qual seu nome?");
document.getElementById("welcome").innerHTML = "Olá, " + NomeComeco + "!";*/


const codificarBotao = document.getElementById ("codificar");
    
codificarBotao.addEventListener("clique",codificar => {
    let offset = document.getElementById("offset").value;
    let mensagem = document.getElementById("mensagem").value;
    document.getElementById("visualizar").innerHTML = cipher.encode(offset,mensagem);
    console.log (codificarBotao)
});


const decodificarBotao = document.getElementById ("decodificar");

decodificarBotao.addEventListener("clique",decodificar => {
    let offset = document.getElementById("offset").value;
    let mensagem = document.getElementById("mensagem").value;
    document.getElementById("visualizar").innerHTML = cipher.decode(offset,mensagem);
    console.log (decodificarBotao)
});