'use strict';

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
/* !!!!Commented out temprorarily!!!!
var newRating = parseFloat(prompt("We would like for you to review you instructor. Please enter a rating between 0.0 - 5.0?"));
if(newRating >5.0){
  parseFloat(confirm("Please re-enter a variable that is between 0.0 and 5.0"));
}else{
  console.log(teacherRating);
}
teacherRating = addTeacherRating (newRating, teacherRating);
var avgRating = getAvgRating (teacherRating);
console.log(teacherRating + avgRating);
alert("Thanks for you review!" +teacherName +" average rating is now " +avgRating);
console.log("Teacher: " + teacherName + "\nDepartment: " + department + "\nRatings: " + teacherRating + "\nAvg. Rating: " +avgRating);
*/
// Students:
var studentName = "Punkk Y. Gregorson";
var major ="Painting";
var gpa =2.8;
console.log("Name: " +studentName + "\nMajor: " +major +"\nG.P.A: " +gpa);

//Courses:
// Declarations:
var courseName ="Robotics";
var semester ="Fall 2017";
var allCourses=[
  ["Robotics", "Engineering"],
  ["Mammals: Changes Post-Nuclear War", "Biology"],
  ["Birds!", "Biology"],
  ["Blargh!!!", "Engineering"],
  ["20th Century Baking Techniques", "History"],
  ["Self-Paving Roads", "Engineering"],
  ["Raining Poodles", "Meterology"],
  ["Yippee!","History"]
];

//Instructions:
/* The function should return a new array
filled with courses that are ONLY in the department specified in the parameter.*/

function searchCourses (coursesArray, departmentSearched){
  var newArray=[];
  for (var i=0; i<coursesArray.length;i++){
      if (coursesArray[i][1]===departmentSearched){
        newArray.push(coursesArray[i][0]);
      }else{
        console.log("FAIL");
      }
  } return newArray;
}

var test=searchCourses(allCourses, department);
console.log(test);
/*
  for(var i=0; i<coursesArray.length; i++){
    if (coursesArray[i][1]===departmentSearched){
      return departmentSearched;
      console.log(departmentSearched);
    }else{
      return console.log("There are no courses currently available in "+departmentSearched + " at this point.");
    }
  }
}*/
//Instructions:
allCourses=searchCourses(allCourses, department);
console.log("Course: " + courseName +"\nTeacher: " +teacherName +"\nSemester: " +semester);
