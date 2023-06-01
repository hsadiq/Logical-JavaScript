function computeFactorial(number) {
    let factorial = 1;
  
    if (number === 0 || number === 1) {
      return factorial;
    }
  
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number: ', number => {
    const factorial = computeFactorial(Number(number));
    console.log('Factorial:', factorial);
    readline.close();
  });  