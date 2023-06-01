function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findMinMax(numbers) {
  var min = numbers[0];
  var max = numbers[0];
  
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  
  return { min: min, max: max };
}

var numbers = [];


for (var i = 0; i < 5; i++) {
  var randomNum = generateRandomNumber(100, 999);
  numbers.push(randomNum);
}

var result = findMinMax(numbers);
console.log("Numbers:", numbers);
console.log("Minimum value:", result.min);
console.log("Maximum value:", result.max);