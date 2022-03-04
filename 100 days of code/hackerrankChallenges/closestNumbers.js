arr = [5, 2, 3, 4, 1]
arr1 = [-5, -7, -11, -15, -19]
arr3 = [-19, -15, -5, 4, 7, 12]
arr2 = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470, ]
function closestNumbers(arr) {
    // Write your code here
    let res = [];
    arr.sort((a, b) => a - b);
     let diff = Infinity;
     for (let i = 0; i < arr.length - 1; i++) {
       if (arr[i + 1] - arr[i] < diff) {
         res = []
         diff = arr[i + 1] - arr[i];
       } 
       if (arr[i + 1] - arr[i] == diff) {
         res.push(arr[i])
         res.push(arr[i + 1])
       }
     }
    
     console.log(res)
}

closestNumbers(arr)

//https://www.hackerrank.com/challenges/closest-numbers