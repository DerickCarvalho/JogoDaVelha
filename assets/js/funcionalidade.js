// Botão jogar tela inicial

let gameScreen = document.getElementById('gameScreen');
let firstScreen = document.getElementById('firstScreen');

document.getElementById('start').addEventListener('click', () => {
firstScreen.style.display = 'none';
gameScreen.style.display = 'flex';
let nomePlayer1 = document.getElementById('player1').value; let nomePlayer2 = document.getElementById('player2').value;

if (nomePlayer1 == "") {
    nomePlayer1 = "Jogador1";
};
if (nomePlayer2 == "") {
    nomePlayer2 = "Jogador2";
};

let vitoriasPlayer1 = 0; let vitoriasPlayer2 = 0;

// Função Placar

document.getElementById('scoreboard').addEventListener('click', () => {
    alert(`Player 01\nNome: ${nomePlayer1}\nVitórias: ${vitoriasPlayer1}\n\nPlayer 02\nNome: ${nomePlayer2}\nVitórias: ${vitoriasPlayer2}`);
});

document.getElementById('play').addEventListener('click', () => {

    let defineJogador = 0; // Variável que servirá de parâmetro para definir a vez de cada jogador

    // Variáveis que irão impedir o jogador de jogar onde já existe um "x" ou "o"

    let li0co0 = 0; let li0co1 = 0; let li0co2 = 0;
    let li1co0 = 0; let li1co1 = 0; let li1co2 = 0;
    let li2co0 = 0; let li2co1 = 0; let li2co2 = 0;

    // Variáveis que servirão apenas para modificar o conteúdo do h1 que estão servindo como espaços do tabuleiro

    let i0j0 = document.getElementById('l0c0'); let i0j1 = document.getElementById('l0c1'); let i0j2 = document.getElementById('l0c2');
    let i1j0 = document.getElementById('l1c0'); let i1j1 = document.getElementById('l1c1'); let i1j2 = document.getElementById('l1c2');
    let i2j0 = document.getElementById('l2c0'); let i2j1 = document.getElementById('l2c1'); let i2j2 = document.getElementById('l2c2');

    i0j0.innerText = "";i0j1.innerText = ""; i0j2.innerText = "";
    i1j0.innerText = ""; i1j1.innerText = ""; i1j2.innerText = "";
    i2j0.innerText = ""; i2j1.innerText = ""; i2j2.innerText = "";

    // Matrizes que irão armazenar os espaços usados  pelo jogador

    let jogador1 = [[0,0,0],
                    [0,0,0],
                    [0,0,0]];

    let jogador2 = [[0,0,0],
                    [0,0,0],
                    [0,0,0]];

    // Funcionalidade de cada espaço do tabuleiro

    document.getElementById('l0c0').addEventListener('click', () => {
            if (li0co0 == 0) {
                li0co0++;
                if (defineJogador == 0) {
                    i0j0.innerText = 'O';
                    defineJogador++;
                    jogador1[0][0] = 1;
                } else {
                    i0j0.innerText = 'X';
                    defineJogador--;
                    jogador2[0][0] = 1;
                }
            }
        })

        document.getElementById('l0c1').addEventListener('click', () => {
            if (li0co1 == 0) {
                li0co1++;
                if (defineJogador == 0) {
                    i0j1.innerText = 'O';
                    defineJogador++;
                    jogador1[0][1] = 1;
                } else {
                    i0j1.innerText = 'X';
                    defineJogador--;
                    jogador2[0][1] = 1;
                }
            }
        })

        document.getElementById('l0c2').addEventListener('click', () => {
            if (li0co2 == 0) {
                li0co2++;
                if (defineJogador == 0) {
                    i0j2.innerText = 'O';
                    defineJogador++;
                    jogador1[0][2] = 1;
                } else {
                    i0j2.innerText = 'X';
                    defineJogador--;
                    jogador2[0][2] = 1;
                }
            }
        })

        document.getElementById('l1c0').addEventListener('click', () => {
            if (li1co0 == 0) {
                li1co0++;
                if (defineJogador == 0) {
                    i1j0.innerText = 'O';
                    defineJogador++;
                    jogador1[1][0] = 1;
                } else {
                    i1j0.innerText = 'X';
                    defineJogador--;
                    jogador2[1][0] = 1;
                }
            }
        })

        document.getElementById('l1c1').addEventListener('click', () => {
            if (li1co1 == 0) {
                li1co1++;
                if (defineJogador == 0) {
                    i1j1.innerText = 'O';
                    defineJogador++;
                    jogador1[1][1] = 1;
                } else {
                    i1j1.innerText = 'X';
                    defineJogador--;
                    jogador2[1][1] = 1;
                }
            }
        })

        document.getElementById('l1c2').addEventListener('click', () => {
            if (li1co2 == 0) {
                li1co2++;
                if (defineJogador == 0) {
                    i1j2.innerText = 'O';
                    defineJogador++;
                    jogador1[1][2] = 1;
                } else {
                    i1j2.innerText = 'X';
                    defineJogador--;
                    jogador2[1][2] = 1;
                }
            }
        })

        document.getElementById('l2c0').addEventListener('click', () => {
            if (li2co0 == 0) {
                li2co0++;
                if (defineJogador == 0) {
                    i2j0.innerText = 'O';
                    defineJogador++;
                    jogador1[2][0] = 1;
                } else {
                    i2j0.innerText = 'X';
                    defineJogador--;
                    jogador2[2][0] = 1;
                }
            }
        })

        document.getElementById('l2c1').addEventListener('click', () => {
            if (li2co1 == 0) {
                li2co1++;
                if (defineJogador == 0) {
                    i2j1.innerText = 'O';
                    defineJogador++;
                    jogador1[2][1] = 1;
                } else {
                    i2j1.innerText = 'X';
                    defineJogador--;
                    jogador2[2][1] = 1;
                }
            }
        })

        document.getElementById('l2c2').addEventListener('click', () => {
            if (li2co2 == 0) {
                li2co2++;
                if (defineJogador == 0) {
                    i2j2.innerText = 'O';
                    defineJogador++;
                    jogador1[2][2] = 1;
                } else {
                    i2j2.innerText = 'X';
                    defineJogador--;
                    jogador2[2][2] = 1;
                }
            }
        })

        // Laço de repetição que ficará verificando a pontuação dos jogadores

        let vencedorJogador1 = 0; // Variável que atuará como boolean
        let vencedorJogador2 = 0; // Variável que atuará como boolean

        let validacao =  setInterval(() => {
                            setTimeout(() => {
                                console.log(`SISTEMA JOGO DA VELHA -> VERIFICANDO VITÓRIA DE JOGADORES`)
                                if (jogador1[0][0] == 1 && jogador1[1][0] == 1 && jogador1[2][0] == 1) {
                                    vencedorJogador1 = 1;
                                }
                                else if (jogador2[0][0] == 1 && jogador2[1][0] == 1 && jogador2[2][0] == 1) {
                                    vencedorJogador2 = 1;
                                }
                                else if (jogador1[0][1] == 1 && jogador1[1][1] == 1 && jogador1[2][1] == 1){
                                    vencedorJogador1 = 1;
                                }
                                else if (jogador2[0][1] == 1 && jogador2[1][1] == 1 && jogador2[2][1] == 1) {
                                    vencedorJogador2 = 1;
                                }
                                else if (jogador1[0][2] == 1 && jogador1[1][2] == 1 && jogador1[2][2] == 1) {
                                    vencedorJogador1 = 1;
                                }
                                else if (jogador2[0][2] == 1 && jogador2[1][2] == 1 && jogador2[2][2] == 1) {
                                    vencedorJogador2 = 1;
                                }
                                else if (jogador1[0][0] == 1 && jogador1[1][1] == 1 && jogador1[2][2] == 1) {
                                    vencedorJogador1 = 1;
                                }
                                else if (jogador2[0][0] == 1 && jogador2[1][1] == 1 && jogador2[2][2] == 1) {
                                    vencedorJogador2 = 1;
                                }
                                else if (jogador1[0][2] == 1 && jogador1[1][1] == 1 && jogador1[2][0] == 1) {
                                    vencedorJogador1 = 1;
                                }
                                else if (jogador2[0][2] == 1 && jogador2[1][1] == 1 && jogador2[2][0] == 1) {
                                    vencedorJogador2 = 1;
                                }
                                else if (jogador1[0][0] == 1 && jogador1[0][1] == 1 && jogador1[0][2] == 1) {
                                    vencedorJogador1 = 1;
                                } 
                                else if (jogador2[0][0] == 1 && jogador2[0][1] == 1 && jogador2[0][2] == 1) {
                                    vencedorJogador2 = 1;
                                }
                                else if (jogador1[1][0] == 1 && jogador1[1][1] == 1 && jogador1[1][2] == 1) {
                                    vencedorJogador1 = 1;
                                }
                                else if (jogador2[1][0] == 1 && jogador2[1][1] == 1 && jogador2[1][2] == 1) {
                                    vencedorJogador2 = 1;
                                }
                                else if (jogador1[2][0] == 1 && jogador1[2][1] == 1 && jogador1[2][2] == 1) {
                                    vencedorJogador1 = 1;
                                }
                                else if (jogador2[2][0] == 1 && jogador2[2][1] == 1 && jogador2[2][2] == 1) {
                                    vencedorJogador2 = 1;
                                }
                            }, 250);

                            if (vencedorJogador1 == 1) {
                                clearInterval(validacao);                            
                                alert("O Jogador 1 ganhou!");
                                vitoriasPlayer1++;
                                console.log(nomePlayer1, vitoriasPlayer1);
                            }
                            if (vencedorJogador2 == 1) {       
                                clearInterval(validacao);                               
                                alert("O Jogador 2 ganhou!");
                                vitoriasPlayer2++;
                                console.log(nomePlayer2, vitoriasPlayer2);
                            }

                        }, 250); 
                });                 
        });
        