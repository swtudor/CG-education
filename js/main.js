console.log("This file is linked!");
var teacherName = "Zak VonBolt";
var department = "Engineering";
var ratingOne = 3.2;
var ratingTwo = 4.5;
var ratingThree = 3.8;
var avgRating = (ratingOne+ratingTwo+ratingThree)/3;
avgRating = avgRating.toFixed(2);

console.log("Teacher: " + teacherName + "\nDepartment: " + department + "\nRatings: " + ratingOne +", " +ratingTwo +", " + ratingThree + "\nAvg. Rating: " +avgRating);

// Students:
var studentName = "Punkk Y. Gregorson";
var major ="Painting";
var gpa =2.8;
console.log("Name: " +studentName + "\nMajor: " +major +"\nG.P.A: " +gpa);

//Courses:
var courseName ="Robotics";
var semester ="Fall 2017";
console.log("Course: " + courseName +"\nTeacher: " +teacherName +"\nSemester: " +semester);
