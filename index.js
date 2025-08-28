// Array de heróis, cada um com nome e xp
const herois = [
    { nome: "Aragorn", xp: 8500 },
    { nome: "Legolas", xp: 9500 },
    { nome: "Gimli", xp: 4500 },
    { nome: "Gandalf", xp: 12000 },
    { nome: "Frodo", xp: 950 }
];

// Usando um laço de repetição `for...of` para percorrer a lista de heróis
for (let heroi of herois) {
    let nivelHeroi;
    let nomeHeroi = heroi.nome;
    let xpHeroi = heroi.xp;

    // A mesma estrutura de decisão de antes
    if (xpHeroi < 1001) {
        nivelHeroi = "Ferro";
    } else if (xpHeroi <= 2000) {
        nivelHeroi = "Bronze";
    } else if (xpHeroi <= 5000) {
        nivelHeroi = "Prata";
    } else if (xpHeroi <= 7000) {
        nivelHeroi = "Ouro";
    } else if (xpHeroi <= 8000) {
        nivelHeroi = "Platina";
    } else if (xpHeroi <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (xpHeroi <= 10000) {
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }

    // Saída para cada herói
    console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);
}