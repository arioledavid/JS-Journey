a = [2, 6]
b = [24, 36]

function getTotalX(a, b) {
    // Write your code here
  const c =[];
       function checkFactor(num1, num2) {
         if (num1 % num2 == 0) {
           return true;
         }
       return false
     }
  
  function checkC(arr1, arr2) {
    aPass = arr1.every((element) => element === true)
    bPass = arr2.every((element) => element === true)
    
    if (aPass && bPass) {
      return true
    }
    else return false
    
  }
  
   for (let i = 1; i <= 100; i++) {
   
     let dict1 = []
     let dict2 = []
     
     for (let j = 0; j < a.length; j++) {
       let  m  = checkFactor(i, a[j]);
       dict1.push(m) 
     }
     for (let k = 0; k < b.length; k++) {
       let  n  = checkFactor(b[k], i);
       dict2.push(n) 
      }  
     
     let check = checkC(dict1, dict2)
     
     if (check) {
       c.push(i);
     }
     
   }
  return c.length;
}

getTotalX(a, b)