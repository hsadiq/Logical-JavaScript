function printPowersOfTwo(n) {
    for (var i = 0; i <= n; i++) {
      var result = Math.pow(2, i);
      console.log("2^" + i + " = " + result);
    }
  }
  
  var n = parseInt(process.argv[2]);
  
  if (isNaN(n) || n < 0) {
    console.log("Invalid input. Please provide a non-negative number.");
  } else {
    printPowersOfTwo(n);
  }
  