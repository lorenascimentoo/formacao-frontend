//Aplicando abstração
class Cliente {
    nome;
    cpf;
    }

class ContaCorrente{
    agencia;
    // Aplicando encapsulamento
     // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo=0; // convenção entre a comunidade js pra indicar que um atributo é privado

    sacar(valor){ //método que recebe um parâmetro
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        //Verifica se os valores são válidos para depósito
        if(valor<=0){
            return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;

ContaCorrenteRicardo.depositar(-100);
ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(100);

const valorSacado = ContaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(ContaCorrenteRicardo);