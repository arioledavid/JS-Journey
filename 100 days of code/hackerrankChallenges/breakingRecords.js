scores = [12, 24, 10, 24] 


function breakingRecords(scores) {
    // Write your code here
  const records = [];
  let min = scores[0];
  let max = scores[0];
  let minCount = 0;
  let maxCount = 0;
  for (let i = 0; i < scores.length; i++) {
   
    if (scores[i] > max){
       max = scores[i];
       maxCount ++;
    }
    if (scores[i] < min) {
       min = scores[i]
       minCount ++;
    }   
     console.log(scores[i], min, max)  
  }
  console.log(maxCount, minCount )
  records.push(maxCount);
  records.push(minCount);
   return records;
}


breakingRecords(scores)