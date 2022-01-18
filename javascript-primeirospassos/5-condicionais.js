console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = false;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

/*
 estrutura condicional - if
 se atender a condição realiza a operação/função
 estrutura simples

 if(condicional){
    //código aqui
 }else{
    //código aqui
 }
*

//estrutura condicional encadeada
if(idadeComprador>18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
    // else, no caso da condicional não ser atendida, executa a código/função
} else if(estaAcompanhado){
    console.log("Está acompanhado");
    listaDeDestinos.splice(1,1);
} else{
    console.log("Não é maior de idade e não posso vender")
}
*/

if(idadeComprador>18 || estaAcompanhado){
    console.log("Passagem será vendida");
    listaDeDestinos.splice(1,1);
    // else, no caso da condicional não ser atendida, executa a código/função
} else{
    console.log("Não é maior de idade e não posso vender")
}

console.log(listaDeDestinos);

/*
 OPERADORES LÓGICOS, funcionam de maneira similar ao da matemática
 ==, para igualdade/comparação, pois um único faz a atribuição

console.log(idadeComprador > 18); // maior que
console.log(idadeComprador < 18); // menor que
console.log(idadeComprador >= 18); // maior ou igual
console.log(idadeComprador <= 18); // menor ou igual
console.log(idadeComprador == 18); // igual a

 - && (e) : as duas condicionais devem ser verdadeiras
 - || (ou): uma das condicionais devem ser verdadeiros
*/

// ter cógido duplicado não é uma boa prática