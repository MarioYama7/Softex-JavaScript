var estado; 
var op1; 
var op2; 
var resultado;
var operacao; 


let calculadora = {
    numeroArray : new Array(), 

    inicializacao : function (){
         estado = 'inicializacao';
         this.display(); /*troca o estado, como se fosse um reset*/
    },
 
    adicao : function () {
        operacao = 'adicao';
        estado='operando2'; /*colocando o operando 2, depois do sinal da operação vai vim o segundo número*/
        this.numeroArray=[]; /*Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando*/
    },
    
    subtracao : function(){
        operacao = 'subtracao';
        estado = 'operando2';
        this.numeroArray=[];
    },

    divisao : function(){
        operacao = 'divisao';
        estado = 'operando2';
        this.numeroArray=[];
    },

    multiplicacao : function(){
        operacao = 'multiplicacao';
        estado = 'operando2';
        this.numeroArray=[];
    },

    ac : function(){
        calculadora.inicializacao();
        this.numeroArray=[]; /*limpa a calculadora e vai pra função inicializando*/
    },

    del : function(){
        this.numeroArray.pop();/*o pop vai retirar o ultimo numero e chamar a função display*/
        this.proximoNumero();
        this.display();/*chama a função pra mostrar o display atualizado*/
    },

    igual : function(){
        switch (operacao){ /*fazer a operação dependendo da variavel*/
            case 'adicao':
            resultado = op1+op2;
            estado = 'resultado';
            this.display();
            break;

            case 'subtracao':
            resultado = op1-op2;
            estado = 'resultado';
            this.display();
            break;

            case 'divisao' :
            resultado = op1/op2;
            estado = 'resultado'
            this.display();
            break;                
            
            case 'multiplicacao':
            resultado = op1*op2;
            estado = 'resultado'
            this.display();
            break;
        }


    },

    display : function(){
        switch(estado){ /*switch é sempre um depende*/
            case'inicializacao':
                document.getElementById("display").innerText/*Esse innerText serve para auxilia no get, fazendo a troca*/= 'Display'; /*o get Element chama a id, vai integrar o JS ao HTML */
                estado = 'operando1';
                break;

            case 'operando1':
                document.getElementById("display").innerText = op1;
                break;

            case 'operando2':
                document.getElementById("display").innerText = op2;
                break;

            case 'resultado':
                document.getElementById("display").innerText = resultado;
                estado = 'operando1'
                break;

        }

    },

    proximoNumero : function(digito){ /*Essa função faz um push do número digitado no final do array, também informa qual dos operandos*/
                     switch(estado){
                        case 'operando1':
                        this.numeroArray.push(digito); /*informa que a função está no elemento calculadora*/
                        op1=parseFloat(this.numeroArray.join(''));
                        this.display();
                        break

                        case 'operando2':
                        this.numeroArray.push(digito);
                        op2=parseFloat(this.numeroArray.join(''));
                        this.display();
                        break
                    }
    },
}