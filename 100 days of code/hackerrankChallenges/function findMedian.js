arr = [5, 3, 1, 2, 4]

function findMedian(arr) {
    // Write your code here
     arr.sort((a, b) => a - b);
    const med = Math.floor(arr.length/2)
     return (arr[med])
}

findMedian(arr)

//https://www.hackerrank.com/challenges/find-the-median