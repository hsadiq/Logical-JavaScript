function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function getPalindrome(number) {
    const strNumber = String(number);
    const reversedStrNumber = strNumber.split('').reverse().join('');
    return parseInt(reversedStrNumber);
  }
  
  function checkPrimeAndPalindrome(number) {
    if (isPrime(number)) {
      const palindrome = getPalindrome(number);
      if (isPrime(palindrome)) {
        console.log(`${number} is prime, and its palindrome ${palindrome} is also prime.`);
      } else {
        console.log(`${number} is prime, but its palindrome ${palindrome} is not prime.`);
      }
    } else {
      console.log(`${number} is not prime.`);
    }
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number: ', number => {
    checkPrimeAndPalindrome(Number(number));
    readline.close();
  });
  