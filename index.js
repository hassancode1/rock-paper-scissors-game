const Game = () =>{
let pscore = 0;
let cscore = 0;

const startgame = () => {
     const playbtn = document.querySelector(".intro button");
     const introScreen = document.querySelector(".intro");
     const match = document.querySelector(".match");
     
    playbtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadein");
    });   
};

const playmatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerhand = document.querySelector(".player-hand");
    const computerhand = document.querySelector(".computer-hand");

   const computeroptions = ["rock", "paper", "scissors"];

   options.forEach( option =>{
     option.addEventListener("click", function(){
      const computernumber = Math.floor(Math.random() * 3);
      const computerchoice = computeroptions[computernumber];
comparehands(this.textContent, computerchoice);

      playerhand.src =`./assets/${this.textContent}.png`;
      computerhand.src =`./assets/${computerchoice}.png`



      playerhand.style.animation =" shakePlayer 2s ease"
     computerhand.style.animation = " computerPlayer 2s ease"
     });
   });



};
const updateScore = () =>{
  const playerscore  =  document.querySelector(".player-score p");
  const computerscore  =  document.querySelector(".computer-score p");
  playerscore.textContent = pscore;
  computerscore.textContent =cscore
}
const comparehands = (playerchoice,  computerchoice) =>{
  const winner = document.querySelector('.winner');

  if(playerchoice === computerchoice){
    winner.textContent= "its a tie" ;
    return;
  }

  // check for rock
  if(playerchoice === 'rock'){
    if(computerchoice === 'scissors'){
    winner.textContent= "player wins" ;
    pscore++
    return 
    }else{
      winner.textContent= "computer wins" ;
      cscore++
      return 
    }
  }

  // check for paper
  if(playerchoice === 'paper'){
    if(computerchoice === 'scissors'){
    winner.textContent= "computer wins" ;
    cscore++
    updateScore()
    return ;
    }else{
     winner.textContent= "player wins" ;
     pscore++
     updateScore()
    return ;
    }
  }
  
  if(playerchoice === 'scissors'){
    if(computerchoice === 'rock'){
    winner.textContent= "computer wins" ;
    cscore++
    updateScore()
    return ;
    }else{
     winner.textContent= "player wins" ;
     psore++
     updateScore()
    return ;
    }
  }
  
  

  
}





startgame();
playmatch();
};
Game(); 