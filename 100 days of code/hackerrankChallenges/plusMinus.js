function plusMinus(arr) {
    // Write your code here
     let plus = 0;
     let minus = 0;
     let zero = 0;
     
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] > 0) {
             plus += 1;
         }
         else if (arr[i] < 0) {
             minus += 1;
         }
         else {
             zero += 1
         }
     }
     
     console.log(parseFloat(plus/arr.length).toFixed(6));
     console.log(parseFloat(minus/arr.length).toFixed(6));
     console.log(parseFloat(zero/arr.length).toFixed(6));

}

//https://www.hackerrank.com/challenges/plus-minus