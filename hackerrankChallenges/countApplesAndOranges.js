function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
     appleCount = [];
     orangeCount = [];
  
     console.log(s, t);
     console.log(a, b);
     console.log(apples, oranges);
      apples.forEach((apple)=> {
        let check = a + apple
        console.log(check)
       if ( check >= s && check <= t)  {
         appleCount.push(apple);
       }
     })
      oranges.forEach((orange)=> {
          let check = b + orange
          console.log(check)
       if ( check >= s && check <= t ) {
         orangeCount.push(orange);
       }
     })
     console.log(appleCount)
     console.log(orangeCount)
     console.log(appleCount.length);
     console.log(orangeCount.length);
}

countApplesAndOranges(2, 3, 1, 5, [2], [-2]) 