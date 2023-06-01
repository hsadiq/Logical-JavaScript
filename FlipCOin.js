// function Toss(num){
//     let randomNum = Math.random;

//     if(randomNum < 0.5){
//         return "Heads";
//     }else{
//         return "Tails";
//     }
// }

// const prompt = require('prompt-sync')();
// let choice;

// do{
//     let start = parseInt(prompt("Enter 1 to Toss " + "\t" + "Enter 0 to Exit" + "\n" + "Enter Your Choice: "));  
//     result = Toss(start);
//     console.log(result);
// }while(choice == 0);


function flipCoin() {
    return Math.random() < 0.5 ? 'Heads' : 'Tails';
  }
  
  function playGame() {
    let headsCount = 0;
    let tailsCount = 0;
  
    while (headsCount < 11 && tailsCount < 11) {
      const result = flipCoin();
      if (result === 'Heads') {
        headsCount++;
      } else {
        tailsCount++;
      }
    }
  
    return headsCount === 11 ? 'Heads' : 'Tails';
  }
  
  const winner = playGame();
  console.log('Winner:', winner);