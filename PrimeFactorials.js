function computeFactors(number) {
    const factors = [];
  
    for (let i = 2; i <= number; i++) {
      while (number % i === 0) {
        factors.push(i);
        number /= i;
      }
    }
  
    return factors;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number: ', number => {
    const factors = computeFactors(Number(number));
    console.log('Factors:', factors);
    readline.close();
  });
  