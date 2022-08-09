
/*Função tradicional*/
function carro() {
    console.log("Toyota");
  }
 
 /*Tradicional com parâmetros*/
 function y (a, b) {
     return a - b
 }
 
 /*arrow com parametros*/
 let soma = (a, b) => {
     let resultado = a + b;
     return resultado;
 }
 
 let resultado1 = soma(5,7);
 console.log(resultado1); 