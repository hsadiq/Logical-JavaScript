function findMinMax(a, b, c) {
    const operations = [
      a + b * c,
      a % b + c,
      c + a / b,
      a * b + c
    ];
  
    let maxResult = operations[0];
    let minResult = operations[0];
  
    for (let i = 1; i < operations.length; i++) {
      switch (i) {
        case 1:
          maxResult = Math.max(maxResult, operations[i]);
          minResult = Math.min(minResult, operations[i]);
          break;
        case 2:
          maxResult = Math.max(maxResult, operations[i]);
          minResult = Math.min(minResult, operations[i]);
          break;
        case 3:
          maxResult = Math.max(maxResult, operations[i]);
          minResult = Math.min(minResult, operations[i]);
          break;
        case 4:
          maxResult = Math.max(maxResult, operations[i]);
          minResult = Math.min(minResult, operations[i]);
          break;
      }
    }
  
    return {
      maximum: maxResult,
      minimum: minResult
    };
  }
  
  const a = 2;
  const b = 3;
  const c = 4;
  
  const result = findMinMax(a, b, c);
  console.log("Maximum result:", result.maximum);
  console.log("Minimum result:", result.minimum);
  