e = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0]


d = [0, 0, 0, 0, 0, 1, 0, 0, 1, 0]


function jumpingOnClouds(c) {
  let count = 0;
  let skip = 0;
  for (let i = 0; i < c.length; i++) {
    console.log(i, " ", count, " ", skip)
    if (c[i] === 1 || skip === 1) {
       skip = 0;
      continue;
    }
    
    if (c[i] === 0) {
      
      if (c[i + 2] === 0) {
         skip = 1;
        count += 1;
        continue
      }
      
      if(c[i + 1]  === 0) {
        count += 1;
        continue
      }
      
     
  }
     
   
  }
  
  return count;
}


jumpingOnClouds(e)