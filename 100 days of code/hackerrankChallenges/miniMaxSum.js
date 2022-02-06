arr = [1, 3, 5, 7, 9]

function miniMaxSum(arr) {
    // Write your code here
  newArr = []
  min = 0
  max = 0
  
   for (let i = 0; i < arr.length; i++) {
     let temp_sum = 0
     for (let j = 0; j < 4; j++) {
       
      if (i + j <= 4) {
        temp_sum +=  arr[i + j]
      }
      else {
        if ((i + j) < 5) {
        temp_sum += arr[5 - (i + j)]
          }
        else {
          temp_sum += arr[(i + j) - 5]
        }
      }
     }
     newArr.push(temp_sum)
   //   if (temp_sum > max) {
   //     max = temp_sum
   //   }
   //    if (temp_sum < min) {
   //     max = temp_sum
   //   }
     } 
     console.log(newArr)
   min = Math.min(...newArr)
  max = Math.max(...newArr)
  console.log(min, max)
  
}
miniMaxSum(arr)


//https://www.hackerrank.com/challenges/mini-max-sum