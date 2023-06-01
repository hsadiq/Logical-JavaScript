const prompt = require('prompt-sync')();

let digit = parseInt(prompt("Enter Digit: "));

let word;
switch (digit) {
    case 1:
        word = "One";
        break;
    case 2:
        word = "Two";
        break;
    case 3:
        word="Three";
        break;
    case 4:
        word="Four";
        break;
    case 5:
        word="Five";
        break;
    case 6:
        word="Six";
        break;
    case 7:
        word="Seven";
        break;
    case 8:
        word="Eight";
        break;
    case 9:
        word="Nine";
        break;
    case 0:
        word="Zero";
        break;
    default:
        console.log("Enter Only Single Digit!!");
        break;
}
console.log(word);