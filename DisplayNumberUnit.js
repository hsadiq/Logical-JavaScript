function displayNumberUnits(number) {
    const numberString = String(number);
    const length = numberString.length;
  
    switch (length) {
      case 1:
        return "ones";
      case 2:
        return "tens";
      case 3:
        return "hundreds";
      case 4:
        return "thousands";
      case 5:
        return "ten thousands";
      default:
        return "Number is too large to display units.";
    }
  }
  
  console.log(displayNumberUnits(1)); 
  console.log(displayNumberUnits(10)); 
  console.log(displayNumberUnits(100)); 
  console.log(displayNumberUnits(1000)); 
  console.log(displayNumberUnits(10000)); 
  console.log(displayNumberUnits(123456)); 
  