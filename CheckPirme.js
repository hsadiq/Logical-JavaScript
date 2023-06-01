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

  const prompt = require('prompt-sync')();

let Check = parseInt(prompt("Enter Number: "));

result = isPrime(Check);

console.log("Your NUmber: "+Check+ "\n"+"Prime Number: "+result);