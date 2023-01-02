function playround(player, computer){
    let pedra = document.querySelector('.b1')
    let papel = document.querySelector('.b2')
    let tesoura = document.querySelector('.b3')
    const text = document.querySelector('.inner')
    
    let texto;
    let decisionComputer
    let decisionPlayer;

    switch (decisionplayer) {
        case pedra: if (decisionComputer === pedra) {
            document.querySelector('.inner').innerHTML = 'Vocês empataram, bora de proxíma!'
            if  (decisionComputer === papel); {
                document.querySelector('.inner').innerHTML = 'Você perdeu!'
                if (decisionComputer === tesoura); {
                    document.querySelector('.inner').innerHTML = 'Você ganhou!'
            
                }
            }

        }
    }
    
}

function logicGame() {
    let decisionComputer = random(3)
    let comput
    switch (comput) {
        case 1: comput = 'pedra'
        break;
        case 2: comput = 'papel'
        break;
        case 3: comput = 'tesoura'
        break;
    }
}
function random(number) {
    return Math.floor(Math.random() * number + 1);
}

playround()