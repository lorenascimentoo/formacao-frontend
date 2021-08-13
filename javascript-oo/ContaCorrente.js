export class ContaCorrente{
    agencia;
    cliente;
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

    transferir(valor, cliente){
        const valorSacado = this.sacar(valor);
        cliente.depositar(valorSacado);
    }
}