import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas=0;
    agencia;
    _cliente; // transformando o cliente em um atributo privado
    
    // Aplicando encapsulamento
     // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo=0; // convenção entre a comunidade js pra indicar que um atributo é privado

    get saldo(){
        return this._saldo;
    }
    //método para atribuir um cliente
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    //método utilizado para retornar um cliente
    get cliente(){
        return this._cliente;
    }

    constructor(agencia,cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas +=1;
    }

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