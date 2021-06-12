const cipher = {

  //função de codificar
  encode: function(offset, string){
    let code = ""; //"" mensagem que a pessoa vai colocar
    let numoffset = parseInt(offset); //parseInt função de transformar em número inteiro

    for(let i=0; i<=string.lenght; i++){ //string.lenght é o tamanho do texto e o i++ pra somar
      let codeMensage = string.charCodeAt (i); // charcodeat busca no site e o i destermina o valor de letra por letra
    
    //SE o usuário digitar de A a Z maiúscula, 
    if(codeMensage >= 65 && codeMensage <= 90){ // ele vai pegar dentro da tabela ascii a mensagem
      let encrypt = ((codeMensage -65+numoffset)%26)+65; //vai fazer a conta para encriptar
      code+=String.fromCharCode(encrypt); // e vai chamar transformando em letra denovo
      }
    }
    console.log (code);
  },
  
  //função de decodificar
  decode: function(offset, string){
    let decode = "";
    let numoffset = parseInt(offset);

    for(let i=0; i<=string.lenght; i++){
      let decodeMensage = string.charCodeAt (i);
    
    if(decodeMensage >= 65 && decodeMensage <= 90){
      let decrypt = 90-((90-decodeMensage+numoffset)%26);
      decode+=String.fromCharCode(decrypt);
      }
    }
    console.log (decode)
 }
}

export default cipher;