s1 = '12:01:01AM'
s2 = '12:01:01PM'
s3 = '09:01:01AM'
s4 = '05:01:01PM'

function timeConversion(s) {
    // Write your code here
  //determine if it is AM or PM 
  const checkM = s.slice(-2)
  let newS = 's.slice(0, -2)'
  console.log(checkM)
  
  if (checkM === 'AM' ){
    //if 12AM
      if (s.slice(0, 2) === '12') {
        newS = s.replace("12", "00" )
        return newS.slice(0, -2)
      }
    
       newS = s.slice(0, -2)
      return newS;
      }
  if (checkM === 'PM' ){
         if (s.slice(0, 2) === '12') {
         return newS = s.slice(0, -2)
      }
        
     let num = parseInt(s.slice(0, 2));
         num = 12 + num;
         let numS = num.toString();
          newS = s.replace(s.slice(0, 2), numS)
        return newS.slice(0, -2)
          
               
      }

}

timeConversion(s1)
timeConversion(s2)
timeConversion(s3)
timeConversion(s4)


//https://www.hackerrank.com/challenges/time-conversion