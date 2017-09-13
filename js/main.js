console.log("This file is linked!");
var teacherName = "Zak VonBolt";
var department = "Engineering";
var rating1 = 3.2;
var rating2 = 4.5;
var rating3 = 3.8;
var avgRating = (rating1+rating2+rating3)/3;
avgRating = avgRating.toFixed(2);

console.log("Teacher: " + teacherName + "\nDepartment: " + department + "\nRatings: " + rating1 +", " +rating2 +", " + rating3 + "\nAvg. Rating: " +avgRating);

// Students:
var studentName = "Punkk Y. Gregorson";
var major ="Painting";
var gpa =2.8;
console.log("Name: " +studentName + "\nMajor: " +major +"\nG.P.A: " +gpa);

//Courses:
var courseName ="Robotics";
var semester ="Fall 2017";
console.log("Course: " + courseName +"\nTeacher: " +teacherName +"\nSemester: " +semester);
