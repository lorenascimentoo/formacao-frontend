// js é case sensitive
console.log("Trabalhando com variáveis");

idade = 29;
Idade = 30;

console.log(Idade);

// const, let e var => são importantes para definir o escopo da variável
// => const, a partir do momento que declara como const não permite mudar o valor
// => let, me permite fazer atribuições na variável
// escopo global: nome = "Ricardo"; não é uma boa prática
// boa prática utilizar const ou let

//interpolação de variáveis
let nome = "Ricardo";
console.log(`Meu nome é ${nome}`);

//sobrescrita de variavel
nome = nome + "Bugan"; 
console.log(nome);

// js é fracamente tipada, após ser declarada, ela pode receber como atribuição qualquer tipo de variável