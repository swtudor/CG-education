// Teachers:
var teacherName = "Zak VonBolt";
var department = "Engineering";
var rating =[3.8, 4.0, 3.2];

function getAvgRating (rating){
  var total = 0;
  for(var i = 0; i < rating.length; i++) {
    total += rating[i];
  }
  var avg = total / rating.length;
  avg = avg.toFixed(2);
  return avg;
}
var avgRating = getAvgRating (rating);

console.log("Teacher: " + teacherName + "\nDepartment: " + department + "\nRatings: " + rating + "\nAvg. Rating: " +avgRating);

// Students:
var studentName = "Punkk Y. Gregorson";
var major ="Painting";
var gpa =2.8;
console.log("Name: " +studentName + "\nMajor: " +major +"\nG.P.A: " +gpa);

//Courses:
var courseName ="Robotics";
var semester ="Fall 2017";
console.log("Course: " + courseName +"\nTeacher: " +teacherName +"\nSemester: " +semester);
