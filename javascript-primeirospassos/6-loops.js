console.log(`Trabalhando com estruturas de repetição`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador>18 || estaAcompanhado == true;

if(podeComprar){
    console.log("Passagem será vendida");
    listaDeDestinos.splice(1,1);
    temPassagemComprada = true;
    // else, no caso da condicional não ser atendida, executa a código/função
} else{
    console.log("Não é maior de idade e não posso vender");
    temPassagemComprada = false;
}

let destinoExiste = false;

let contador =0;
// enquanto a condição estiver sendo atenda, ele executa o código novamente
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break; //sai do fluxo de execução do laço while, mesmo que a condição atenda a estrutura de repetição
    }

    contador +=1;
}

for(let cont =0; cont <3; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break; //sai do fluxo de execução do laço while, mesmo que a condição atenda a estrutura de repetição
    }
}

console.log(`Destino existe: ${destinoExiste}`);