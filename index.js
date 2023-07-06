// import "./style.css";

let playerHeading = document.getElementById("game-heading")
let buttonPos = document.getElementsByClassName("game-square")
let restartButton = document.getElementById("restart-button")

const newButtons = Array.from(document.getElementsByClassName("game-square"))


let gameCounter = [0,0,0,0,0,0,0,0,0]
for(let pos = 0; pos < buttonPos.length; pos++){
  buttonPos[pos].addEventListener('click', () => {
    if (playerHeading.innerHTML === `Player 1's Turn` && buttonPos[pos].innerHTML === ''){
       buttonPos[pos].textContent = `X`
       playerHeading.textContent = `Player 2's Turn`
       gameCounter[pos] = 1
    }
    if(playerHeading.innerHTML === `Player 2's Turn` && buttonPos[pos].innerHTML === ''){
      buttonPos[pos].textContent = `O`
      playerHeading.textContent = `Player 1's Turn`
      gameCounter[pos] = 2
    }


  if(gameCounter[0] === 1 && gameCounter[1] === 1 && gameCounter[2] === 1){
     playerHeading.textContent = `Player 1 Won`
     restartButton.style.display = 'block'
  }
  if(gameCounter[0] === 2 && gameCounter[1] === 2 && gameCounter[2] === 2){
     playerHeading.textContent = `Player 2 Won`
     restartButton.style.display = 'block'
  }
   if(gameCounter[3] === 1 && gameCounter[4] === 1 && gameCounter[5] === 1){
     playerHeading.textContent = `Player 1 Won`
     restartButton.style.display = 'block'
  }
  if(gameCounter[3] === 2 && gameCounter[4] === 2 && gameCounter[5] === 2){
     playerHeading.textContent = `Player 2 Won`
     restartButton.style.display = 'block'
  }
   if(gameCounter[6] === 1 && gameCounter[7] === 1 && gameCounter[8] === 1){
     playerHeading.textContent = `Player 1 Won`
     restartButton.style.display = 'block'
  }
  if(gameCounter[6] === 2 && gameCounter[7] === 2 && gameCounter[8] === 2){
     playerHeading.textContent = `Player 2 Won`
     restartButton.style.display = 'block'
  }
   if(gameCounter[0] === 1 && gameCounter[3] === 1 && gameCounter[6] === 1){
     playerHeading.textContent = `Player 1 Won`
     restartButton.style.display = 'block'
  }
  if(gameCounter[0] === 2 && gameCounter[3] === 2 && gameCounter[6] === 2){
     playerHeading.textContent = `Player 2 Won`
     restartButton.style.display = 'block'
  }
   if(gameCounter[1] === 1 && gameCounter[4] === 1 && gameCounter[7] === 1){
     playerHeading.textContent = `Player 1 Won`
     restartButton.style.display = 'block'
  }
  if(gameCounter[1] === 2 && gameCounter[4] === 2 && gameCounter[7] === 2){
     playerHeading.textContent = `Player 2 Won`
     restartButton.style.display = 'block'
  }
   if(gameCounter[2] === 1 && gameCounter[5] === 1 && gameCounter[8] === 1){
     playerHeading.textContent = `Player 1 Won`
     restartButton.style.display = 'block'
  }
  if(gameCounter[2] === 2 && gameCounter[5] === 2 && gameCounter[8] === 2){
     playerHeading.textContent = `Player 2 Won`
     restartButton.style.display = 'block'
  }
   if(gameCounter[0] === 1 && gameCounter[4] === 1 && gameCounter[8] === 1){
     playerHeading.textContent = `Player 1 Won`
     restartButton.style.display = 'block'
  }
  if(gameCounter[0] === 2 && gameCounter[4] === 2 && gameCounter[8] === 2){
     playerHeading.textContent = `Player 2 Won`
     restartButton.style.display = 'block'
  }
   if(gameCounter[2] === 1 && gameCounter[4] === 1 && gameCounter[6] === 1){
     playerHeading.textContent = `Player 1 Won`
     restartButton.style.display = 'block'
  }
  if(gameCounter[2] === 2 && gameCounter[4] === 2 && gameCounter[6] === 2){
     playerHeading.textContent = `Player 2 Won`
     restartButton.style.display = 'block'
  } 
 
 

console.log(newButtons)

let reset = newButtons.every(button => button.innerHTML !== '' )

console.log(reset)

if(reset){
  playerHeading.textContent = `Tie Game.`
  restartButton.style.display = 'block'
}

console.log(reset)


    
  }) 

//  if(playerHeading.innerHTML === `Player 1's Turn` && buttonPos[pos].innerText === "X" || buttonPos[pos].innerText === "O"){
//     playerHeading.textContent = `Tie Game.`
//     restartButton.style.display = 'block'
//     console.log(buttonPos.innerText)
//   }
    
restartButton.addEventListener('click', () => {
    buttonPos[pos].textContent = ""
    playerHeading.textContent = `Player 1's Turn`
    restartButton.style.display = 'none'
    
})

  
}





// if(){
//     // 
//     console.log(buttonPos.innerHTML)
//   }
 

    


// console.log(gameCounter[1][1])

// else if(
  //    gameCounter[2] === 2 && gameCounter[4] === 1 && gameCounter[6] === 1 && 
  //   //  gameCounter[2] === 2 && gameCounter[4] === 1 && gameCounter[6] === 1 &&
  //    gameCounter[0] === 2 && gameCounter[4] === 1 && gameCounter[8] === 1 &&
  //   //  gameCounter[0] === 2 && gameCounter[4] === 1 && gameCounter[8] === 1 &&
  //    gameCounter[2] === 2 && gameCounter[5] === 1 && gameCounter[8] === 1 &&
  //   //  gameCounter[2] === 2 && gameCounter[5] === 1 && gameCounter[8] === 1 &&
  //    gameCounter[1] === 2 && gameCounter[4] === 1 && gameCounter[7] === 1 &&
  //   //  gameCounter[1] === 2 && gameCounter[4] === 1 && gameCounter[7] === 1 &&
  //    gameCounter[0] === 2 && gameCounter[3] === 1 && gameCounter[6] === 1 &&
  //   //  gameCounter[0] === 2 && gameCounter[3] === 1 && gameCounter[6] === 1 &&
  //    gameCounter[6] === 2 && gameCounter[7] === 1 && gameCounter[8] === 1 &&
  //   //  gameCounter[6] === 2 && gameCounter[7] === 1 && gameCounter[8] === 1 &&
  //    gameCounter[3] === 2 && gameCounter[4] === 1 && gameCounter[5] === 1 &&
  //   //  gameCounter[3] === 2 && gameCounter[4] === 1 && gameCounter[5] === 1 &&
  //    gameCounter[0] === 2 && gameCounter[1] === 1 && gameCounter[2] === 1 
  //   //  gameCounter[0] === 2 && gameCounter[1] === 1 && gameCounter[2] === 1 
  //    ){
  //   playerHeading.textContent = `Tie Game.`
  //   restartButton.style.display = 'block'
  //  }