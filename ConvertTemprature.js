function convertTemperature() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readline.question('Enter the temperature value: ', value => {
      const temperature = parseFloat(value);
  
      readline.question('Enter the conversion selection (1 for degC to degF, 2 for degF to degC): ', selection => {
        const conversion = parseInt(selection);
  
        switch (conversion) {
          case 1:
            if (temperature < 0 || temperature > 100) {
              console.log('Invalid temperature value for degC. Please enter a value between 0 and 100.');
            } else {
              const degF = (temperature * 9/5) + 32;
              console.log(`${temperature} °C is equivalent to ${degF} °F.`);
            }
            break;
          case 2:
            if (temperature < 32 || temperature > 212) {
              console.log('Invalid temperature value for degF. Please enter a value between 32 and 212.');
            } else {
              const degC = (temperature - 32) * 5/9;
              console.log(`${temperature} °F is equivalent to ${degC} °C.`);
            }
            break;
          default:
            console.log('Invalid conversion selection. Please enter 1 or 2.');
            break;
        }
  
        readline.close();
      });
    });
  }
  
  convertTemperature();
  