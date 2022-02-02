function compareTriplets(a, b) {
    // Write your code here
    let asc = 0
    let bsc = 0

for (let i = 0; i < a.length; i++) {
  if (a[i] > b[i]) {
    asc += 1
  }
  else if (b[i] > a[i]) {
    bsc += 1
  }
}

return [asc, bsc]
}

//https://www.hackerrank.com/challenges/compare-the-triplets