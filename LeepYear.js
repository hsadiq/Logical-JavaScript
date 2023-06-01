const prompt = require('prompt-sync')();

let year = parseInt(prompt("Enter Year: "));

function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }

let isLeap = isLeapYear(year);
console.log("Year " + year + " is a leap year: " + isLeap);