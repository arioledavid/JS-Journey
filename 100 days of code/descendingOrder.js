function descendingOrder(n) {
  //takes an integer an arranges it in descending order
  
  //convert integer to string  
  const a = Array.from(n.toString()).map(Number);
  console.log(a)
  //another method  
//   let myFunc = num => Number(num)  
//   const a = Array.from(String(n), myFunc);
  
  
//sort array
b = a. sort((x, y) => y - x);
console.log(b)
  
//covert back to number
let result = parseInt(b.join(''))
console.log(result)
  
}

descendingOrder(12345)

//shorterversion
// return parseInt(String(n).split('').sort().reverse().join(''))
