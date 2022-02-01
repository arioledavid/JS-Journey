function gradingStudents(grades) {
    // Write your code here
  scores = []
   grades.forEach((grade) => {
     
     if (grade < 40) {
      scores.push(grade)
     }
     else {
     
      if ((grade + 1) % 5 === 0 ) {
      scores.push(grade + 1);
    }
      else if((grade + 2) % 5 === 0) {
      scores.push(grade + 2);
    }
      else  scores.push(grade);
         
     }
     
   })
    return scores  
}


a = [30, 40, 50, 54, 63, 72, 85, 90, 91, 93]
gradingStudents(a)
