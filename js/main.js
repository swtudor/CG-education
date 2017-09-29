// Teachers:
//Declarations
var teacherName = "Zak VonBolt";
var department = "Engineering";
var teacherRating =[3.8, 4.0, 3.2];

function addTeacherRating(addRating, rating){
  rating.push(addRating);
  return rating;
}

function getAvgRating (rating){
  var total = 0;
  for(var i = 0; i <rating.length; i++) {
    total += rating[i];
  }
  var avg = (total / rating.length).toFixed(2);
  return avg;
}

// Instructions-


var newRating = parseFloat(prompt("We would like for you to review you instructor. Please enter a rating between 0.0 - 5.0?"));

if(newRating >5.0){
  prompt("Please re-enter a variable that is between 0.0 and 5.0");
}else{
  console.log(teacherRating);
}
teacherRating = addTeacherRating (newRating, teacherRating);
var avgRating = getAvgRating (teacherRating);
console.log(teacherRating + avgRating);
alert("Thanks for you review!" +teacherName +" average rating is now " +avgRating);
console.log("Teacher: " + teacherName + "\nDepartment: " + department + "\nRatings: " + teacherRating + "\nAvg. Rating: " +avgRating);

// Students:
var studentName = "Punkk Y. Gregorson";
var major ="Painting";
var gpa =2.8;
console.log("Name: " +studentName + "\nMajor: " +major +"\nG.P.A: " +gpa);

//Courses:
var courseName ="Robotics";
var semester ="Fall 2017";
console.log("Course: " + courseName +"\nTeacher: " +teacherName +"\nSemester: " +semester);
