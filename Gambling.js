function gamble() {
    let totalMoney = 100;
    let bets = 0;
    let wins = 0;
  
    while (totalMoney > 0 && totalMoney < 200) {
      bets++;
      if (Math.random() < 0.5) {
        totalMoney++;
        wins++;
      } else {
        totalMoney--;
      }
    }
  
    return {
      totalBets: bets,
      totalWins: wins,
      finalMoney: totalMoney
    };
  }
  
  const result = gamble();
  console.log('Total bets:', result.totalBets);
  console.log('Total wins:', result.totalWins);
  console.log('Final money:', result.finalMoney);
  