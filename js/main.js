// Teachers:
var teacherName = "Zak VonBolt";
var department = "Engineering";
var rating =[3.8, 4.0, 3.2];
var newRating = 2.5;

function getAvgRating (rating){
  var total = 0;
  for(var i = 0; i <rating.length; i++) {
    total += rating[i];
  }
  var avg = total / rating.length;
  avg = avg.toFixed(2);
  return avg;
}

function addTeacherRating(newRating, rating){
  rating.push(newRating);
  return rating;
}

rating = addTeacherRating (newRating, rating);
console.log (rating);

var avgRating = getAvgRating (rating);


console.log("Teacher: " + teacherName + "\nDepartment: " + department + "\nRatings: " + rating + "\nAvg. Rating: " +avgRating);

/* seems like a better choice for the addTeacherRating function but it keeps going wonky. Want to fix

function addTeacherRating(newRating, rating){
  if (rating.length==0){
    rating.push(newRating);
  }else{
    for (var i=0; i<rating; i++){
      if(rating [i]==undefined){
        rating[i] = newRating;
        return rating;
      }else if (i==rating.length -1){
        rating.push(newRating);
        return rating;
      }
    }
  }
}
*/

// Students:
var studentName = "Punkk Y. Gregorson";
var major ="Painting";
var gpa =2.8;
console.log("Name: " +studentName + "\nMajor: " +major +"\nG.P.A: " +gpa);

//Courses:
var courseName ="Robotics";
var semester ="Fall 2017";
console.log("Course: " + courseName +"\nTeacher: " +teacherName +"\nSemester: " +semester);
