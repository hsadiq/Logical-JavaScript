const prompt = require('prompt-sync')();

let dayNum = parseInt(prompt("Enter Day Number: "));


let day;
switch(dayNum){

    case 1:
        day = "Monday";
        break;
    case 2:
        day="tuesday";
        break;
    case 3:
        day="Wed";
        break;
    case 4:
        day="Thusday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        break;
    case 7:
        day="Sunday";
        break;
    default:
        break;
}

console.log(day);
