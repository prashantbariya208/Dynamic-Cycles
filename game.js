var scores, roundscore, activeplayer,gameplaying=true,lastDice;
init();
document.querySelector('.btn-roll').addEventListener('click', function () {
    //1. random number
    if(gameplaying){
    var dice = Math.floor(Math.random() * 6) + 1;
    // 2.display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //3.update the round score IF the rolled number was NOT  a 1
    if (dice===6 && lastDice===6){
        scores[activeplayer]=0;
        document.querySelector('#score-'+activeplayer).textContent='0';
        nextplayer();
    }
     else if (dice !== 1) {
        // add score
        roundscore += dice;
        document.querySelector('#current-' + activeplayer).textContent = roundscore;
    } else {
        // next player
        nextplayer();

    }
    lastDice=dice;
 }
 
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gameplaying){ // add current score to global score
        scores[activeplayer] += roundscore;
        // update the UI(user interphase)
        document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];
     // check if the player won the
      var input=document.querySelector('.target').value;
      console.log(input);
        if(input){
            var winningscore=input;                                                           
        }else{
            winningscore=20;
        }
        if (scores[activeplayer] >= winningscore) {
            document.querySelector('#name-' + activeplayer).textContent = 'winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
            gameplaying=false;
      } else {
            // next player
        nextplayer();  }
        
    }
   
});

function nextplayer() {
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
    roundscore = 0;
    activeplayer = 0;
    
    // dice = Math.floor(Math.random() * 6)+ 1;
    // document.querySelector('#current-' + activeplayer).textContent=dice;
    
    // var x=document.querySelector('#score-'+activeplayer).textContent;
    // console.log(x);
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'player 1';
    document.querySelector('#name-1').textContent= 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gameplaying=true;
    
}
