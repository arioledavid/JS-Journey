function findDigits(n) {
    // Write your code here
arr = Array.from(n.toString()).map(Number);
  count = 0;

  for (let i = 0; i < arr.length; i++) {
    let d = arr[i]
    console.log(n, d);
    if ( n % d == 0) {
      count += 1;
   }
    else {
      continue;
    }

}
return count
}


findDigits(1012)