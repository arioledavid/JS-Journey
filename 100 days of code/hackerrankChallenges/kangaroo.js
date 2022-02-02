function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    
    const x = x1 - x2;
    const v = v2 - v1;
    if(x > 0) return "NO";
    if(v > 0) return "NO";
    
      let time = x % v;
     if ((x1 > x2) || (v2 === v1) ) {   
         return "NO";
     }
     if ( (x2 < 0) || (x2 > 10000) || (x1 < 0) || (x1 > 100000 )){
         return "NO";
     }
     if ( (v2 < 1) || (v2 > 10000) || (v1 < 1) || (v1 > 100000) ) {
          return "NO";
     }
     
     if (time === 0) {
         return "YES"
     }
     
     return "NO"
     
}
//https://www.hackerrank.com/challenges/kangaroo