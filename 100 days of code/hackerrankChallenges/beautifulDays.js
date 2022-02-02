function beautifulDays(i, j, k) {
    // Write your code here
     let beautiful = [];
for(let start = i; start <= j; start++){
let numString = start+"";
    let reverse = numString.split('').reverse().join('');
if((start - reverse*1) % k === 0){
      beautiful.push(start)
    }
  }
  return beautiful.length;
}
//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies