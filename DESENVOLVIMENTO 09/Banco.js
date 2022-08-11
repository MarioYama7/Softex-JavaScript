/*Iniciando Sistema para Objeto do banco*/

/*Criando objeto*/

const banco = {
    conta: "0262",
    saldo: 0,
    agencia: "01"
}

/*Métodos utilizando o arrow*/
const deposito = (valor) => banco.saldo = banco.saldo + valor

const saque = (valor) => banco.saldo = banco.saldo - valor;

const consultarSaldo = () => console.log("Saldo atual é: " + banco.saldo)

const consultarConta = () => console.log("Sua agência é: " + banco.agencia + " e sua conta é: " + banco.conta)

/*Operações com o saldo e a exibição de informação da conta*/
consultarConta();
consultarSaldo();
deposito(150);
saque(50);
consultarSaldo();

