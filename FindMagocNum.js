const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function findMagicNumber() {
    readline.question('Think of a number between 1 and 100: ', answer => {
      const number = parseInt(answer);
      if (isNaN(number) || number < 1 || number > 100) {
        console.log('Invalid input. Please enter a number between 1 and 100.');
        findMagicNumber();
      } else {
        guessNumber(number);
      }
    });
  }
  
  function guessNumber(magicNumber) {
    if (magicNumber === 1) {
      console.log('The magic number is 1!');
      readline.close();
      return;
    }
  
    const guess = Math.floor(magicNumber / 2);
  
    readline.question(`Is the number less than ${guess}? (yes/no): `, answer => {
      const lower = answer.toLowerCase();
      if (lower === 'yes') {
        guessNumber(guess);
      } else if (lower === 'no') {
        guessNumber(magicNumber - guess);
      } else {
        console.log('Invalid input. Please enter either "yes" or "no".');
        guessNumber(magicNumber);
      }
    });
  }
  
  findMagicNumber();  