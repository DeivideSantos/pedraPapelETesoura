function random(number) {
    return Math.floor(Math.random() * number + 1);
    
}


function PPT() {
    let computerGet = random(3)
    
    switch (computerGet) {
        case 1: computerPlay = 1
        console.log('PEDRA')
        break; 
        case 2: computerPlay = 2
        console.log('PAPEL')
        break;
        case 3: computerPlay = 3 
        console.log("TESOURA")
        break;   
        
        default: "erro"
        break;
    }
}

var computerPlay;


let rock = document.querySelector('.b1')
let paper = document.querySelector('.b2')
let cissor = document.querySelector('.b3')
let text = document.querySelector('.inner')


PPT()
function PlayNow() { 

    rock.addEventListener('click', function(e){
     if (computerPlay === 1) {document.querySelector('.inner').innerHTML = 'Vocês empataram'}
     else if (computerPlay === 2) {document.querySelector('.inner').innerHTML = 'Você perdeu!'}
      if (computerPlay === 3) {document.querySelector('.inner').innerHTML = 'Você ganhou!'}
      return PPT()
    })
    
    paper.addEventListener('click', function(e){
        if (computerPlay === 1) {document.querySelector('.inner').innerHTML = 'Você ganhou!'}
        else if (computerPlay === 2) {document.querySelector('.inner').innerHTML = 'Vocês empataram!'}
        if (computerPlay === 3) {document.querySelector('.inner').innerHTML = 'Você Perdeu!'}
        return PPT()
    })
    
    cissor.addEventListener('click', function(e){
        if (computerPlay === 1) {document.querySelector('.inner').innerHTML = 'Você perdeu!'}
        else if (computerPlay === 2) {document.querySelector('.inner').innerHTML = 'Você ganhou!'}
        if (computerPlay === 3) {document.querySelector('.inner').innerHTML = 'Vocês empataram!'}
        return PPT() 
    })
}

PlayNow()
