function convertLength(unit, value) {
    let result;
    switch (unit) {
      case 1: // Feet to Inch
        result = value * 12;
        break;
      case 2: // Feet to Meter
        result = value * 0.3048;
        break;
      case 3: // Inch to Feet
        result = value / 12;
        break;
      case 4: // Meter to Feet
        result = value / 0.3048;
        break;
      default:
        return "Invalid unit.";
    }
    return result;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the unit (1-4): ', unit => {
    readline.question('Enter the value: ', value => {
      const conversionResult = convertLength(Number(unit), Number(value));
      if (typeof conversionResult === 'number') {
        console.log('Conversion result:', conversionResult);
      } else {
        console.log('Error:', conversionResult);
      }
      readline.close();
    });
  });
  