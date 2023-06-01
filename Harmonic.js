const prompt = require('prompt-sync')();

function calculateHarmonicNumber(n) {
  let harmonicNumber = 0;
  
  for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
  }
  
  return harmonicNumber;
}

const n = parseInt(prompt('Enter a positive integer: '));

if (isNaN(n) || n < 1) {
  console.log("Invalid input. Please provide a positive integer.");
} else {
  const nthHarmonic = calculateHarmonicNumber(n);
  console.log(`The ${n}th harmonic number is: ${nthHarmonic}`);
}
