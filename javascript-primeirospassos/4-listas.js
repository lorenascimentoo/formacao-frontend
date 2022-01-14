console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

 //adicionando itens dinamicamente em uma lista
 listaDeDestinos.push(`Curitiba`);

 //removendo itens dinamicamente em uma lista
 //a contagem do item (indice) começa em zero
 listaDeDestinos.splice(1,1); // solicita o indice ao qual se quer deletar e a quantidade de itens a ser deletados

 console.log(`Destinos possíveis:`);
 console.log(listaDeDestinos);

 //exibindo um item específico: indica o indice dentro de colchetes.
 console.log(listaDeDestinos[1]);