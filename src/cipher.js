const cipher = { 

  //função de codificar
  encode: function(offset, string){
    let code = "";                                          //"" mensagem que a pessoa vai colocar // vazia pq nao sabemos o que vão escrever
//fazer a função de console.log para testar SEMPRE.

  for(let i=0; i<=string.length; i++){                      //string.lenght é o tamanho do texto e o i++ pra somar
    let codeMensage = string.charCodeAt (i);                // charcodeat busca no site e o i destermina o valor de letra por letra

//SE o usuário digitar de A a Z maiúscula, 
  if(codeMensage >= 65 && codeMensage <= 90){               // ele vai pegar dentro da tabela ascii a mensagem
    let encrypt = ((codeMensage -65+ offset)%26)+65;        //vai fazer a conta para encriptar
    code+=String.fromCharCode(encrypt);                     // e vai chamar transformando em letra denovo
    }
  }
    console.log (code);
    return code;                                             //pedir para retornar a codificação depois dele printar
},
  
  //função de decodificar
  decode: function(offset, string){
    let decode = "";
    
  for(let i=0; i<=string.length; i++){
    let decodeMensage = string.charCodeAt (i);

  if(decodeMensage >= 65 && decodeMensage <= 90){
    let decrypt = 90-((90-decodeMensage+ offset)%26);
     decode+=String.fromCharCode(decrypt);
      }
    }
      console.log (decode);
      return decode;
  }
}
export default cipher; 