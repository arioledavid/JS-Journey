function diagonalDifference(arr, n) {
    // Write your code here
    let  diagOne = [];
    let  diagTwo = [];
  
  for (let i = 0, j = n-1; i < n, j >= 0; i++, j-- ) {
    diagOne.push(arr[i][i]);
    diagTwo.push(arr[i][j]);
    
     
  }
//https://www.hackerrank.com/challenges/diagonal-difference