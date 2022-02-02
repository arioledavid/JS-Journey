function viralAdvertising(n) {
    // Write your code here
       const initial = 5;
     let share = initial;
      let likes = 0;
      let cummulative = 0;
  
    for (let i = 1; i <= n; i++) {
      likes = Math.floor(share/2); 
      share = likes * 3
      cummulative += likes ;   
    }    
    return cummulative;

}
//https://www.hackerrank.com/challenges/strange-advertising