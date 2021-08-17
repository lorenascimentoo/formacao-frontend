//Aplicando abstração
export class Cliente {
    nome;
    _cpf; //indicando que o atributo é privado

    get cpf(){
        return this._cpf;
    }

    constructor(nome,cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}