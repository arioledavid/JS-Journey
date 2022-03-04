function diagonalDifference(arr, n) {
    // Write your code here
      let  diagOne = [];
    let  diagTwo = [];
  
  for (let i = 0, j = n-1; i < n, j >= 0; i++, j-- ) {
    diagOne.push(arr[i][i]);
    diagTwo.push(arr[i][j]);
    
     
  }
  
  let sumDiagOne = diagOne.reduce((n, acc) => {
   return   (n + acc);
  })
  
  let sumDiagTwo = diagTwo.reduce((n, acc) => {
   return   (n + acc);
  })
  
  
  
  let diff = Math.abs(sumDiagOne - sumDiagTwo)
  

  
  return  diff;
  

  }
//https://www.hackerrank.com/challenges/diagonal-difference