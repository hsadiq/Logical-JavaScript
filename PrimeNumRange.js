function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function findPrimeNumbers(start, end) {
    const primeNumbers = [];
  
    for (let number = start; number <= end; number++) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
    }
  
    return primeNumbers;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the starting number: ', start => {
    readline.question('Enter the ending number: ', end => {
      const primeNumbers = findPrimeNumbers(Number(start), Number(end));
      console.log('Prime numbers within the range:', primeNumbers);
      readline.close();
    });
  });
  