candles = [4, 4, 1, 3]

function birthdayCakeCandles(candles) {
    // Write your code here
    const newCandles = candles.sort((a, b) => b - a);
    
    console.log(newCandles)
  count = candles.filter(x => x === newCandles[0]).length
  console.log(count)
  return count 
}
birthdayCakeCandles(candles)