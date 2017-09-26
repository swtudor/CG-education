console.log("This file is linked!");
// Teachers:
var teacherName = "Zak VonBolt";
var department = "Engineering";
var rating =[3.8, 4.0, 3.2];
console.log (rating)

function getAvgRating (){
  var total = 0;
  for(var i = 0; i < rating.length; i++) {
    total += rating[i];
  }
  avg = total / rating.length;
  avg = avg.toFixed(2);
  console.log (avg);
}
var avgRating = getAvgRating (rating);

console.log("Teacher: " + teacherName + "\nDepartment: " + department + "\nRatings: " + rating + "\nAvg. Rating: " +avg);

// Students:
var studentName = "Punkk Y. Gregorson";
var major ="Painting";
var gpa =2.8;
console.log("Name: " +studentName + "\nMajor: " +major +"\nG.P.A: " +gpa);

//Courses:
var courseName ="Robotics";
var semester ="Fall 2017";
console.log("Course: " + courseName +"\nTeacher: " +teacherName +"\nSemester: " +semester);
