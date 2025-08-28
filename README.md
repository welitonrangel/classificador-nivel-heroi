Desafio Classificador de Nível de Herói 🦸‍♂️
Status: Desafio Concluído ✔️

Tabela de Conteúdos
Sobre o Projeto

O Desafio

Tecnologias Utilizadas

Como Executar o Projeto

Lógica do Código


📖 Sobre o Projeto
Este repositório contém a resolução do desafio de código "Classificador de Nível de Herói", proposto pela Digital Innovation One (DIO). O objetivo é criar um programa que, com base na quantidade de experiência (XP) de um herói, determine o seu nível correspondente.

Este projeto foi desenvolvido para praticar conceitos fundamentais de programação, como:

Variáveis

Operadores

Estruturas de Decisão (if/else if/else)

Laços de Repetição (for)

🎯 O Desafio
A tarefa consiste em criar um programa que receba o nome e a XP de um herói e, em seguida, utilize uma estrutura de decisão para classificar seu nível de acordo com a tabela abaixo:

Nível	Faixa de XP
Ferro	Menor que 1.000
Bronze	Entre 1.001 e 2.000
Prata	Entre 2.001 e 5.000
Ouro	Entre 5.001 e 7.000
Platina	Entre 7.001 e 8.000
Ascendente	Entre 8.001 e 9.000
Imortal	Entre 9.001 e 10.000
Radiante	Maior ou igual a 10.001

Exportar para as Planilhas
Ao final, o programa deve exibir a mensagem no seguinte formato:

O Herói de nome **{nome}** está no nível de **{nivel}**

💻 Tecnologias Utilizadas
JavaScript: Linguagem de programação utilizada para a lógica do classificador.

Node.js: Ambiente de execução para o script JavaScript fora do navegador.

🚀 Como Executar o Projeto
Para executar este projeto localmente, siga os passos abaixo:

Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina.

Clone o repositório

Bash

git clone https://github.com/welitonrangel/classificador-nivel-heroi.git
Navegue até o diretório do projeto

Bash

cd classificador-nivel-heroi
Execute o script

Bash

node classificador.js
O resultado será exibido no seu terminal. Você pode alterar os dados do herói diretamente no arquivo classificador.js para testar diferentes nomes e níveis de XP.

🧠 Lógica do Código
O script principal (classificador.js) inicializa as variáveis nomeHeroi e xpHeroi. Em seguida, uma estrutura if/else if/else é utilizada para comparar o valor de xpHeroi com as faixas definidas e atribuir o nível correspondente à variável nivelHeroi. Por fim, uma mensagem formatada é exibida no console.

Uma versão alternativa do código também é apresentada, demonstrando o uso de laços de repetição. Um array de objetos, onde cada objeto representa um herói com nome e xp, é percorrido com um laço for...of. A mesma lógica de classificação é aplicada a cada herói do array, exibindo o resultado individualmente. Isso demonstra como o código pode ser escalado para processar múltiplos dados de uma só vez.
