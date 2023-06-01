function arePalindromes(number1, number2) {
    const str1 = String(number1);
    const str2 = String(number2);
  
    const reversedStr1 = str1.split('').reverse().join('');
    const reversedStr2 = str2.split('').reverse().join('');
  
    return str1 === reversedStr2 && str2 === reversedStr1;
  }
  
  console.log(arePalindromes(121, 121)); 
  console.log(arePalindromes(123, 321));  
  console.log(arePalindromes(1221, 2112));  