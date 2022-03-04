a = [1, 2, 3, 4, 3, 2, 1]

function lonelyinteger(a) {
    // Write your code here
  const counts = {}
  for (const num of a) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
    console.log(counts)
    res = Object.keys(counts).find(key => counts[key] === 1);
  console.log(res)
}



lonelyinteger(a)

//https://www.hackerrank.com/challenges/lonely-integer/problem