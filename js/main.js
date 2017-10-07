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
  ["Origins of the MonoRace", "History"],
  ["20th Century Baking Techniques", "History"],
  ["Self-Paving Roads", "Engineering"],
  ["Raining Poodles", "Meterology"],
  ["Yippee!","History"]
];

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

function validate (departmentSearched,coursesArray){
  for (var i=0; i<coursesArray.length;i++){
    if (coursesArray[i][1]===departmentSearched){
      return true;
    }
  }
  return false;
}

//Instructions:
var departmentToSearch = prompt("What department would you like to look for classes in?");

var isValid = false;

while (!isValid){
  isValid = validate (departmentToSearch, allCourses);
  if(isValid){
    allCourses=searchCourses(allCourses, departmentToSearch);
    alert("Courses available for " + departmentToSearch + " are: " + allCourses);
  }else{
    departmentToSearch = prompt("That department does not exist, please try again!");
  }
}


console.log("Course: " + courseName +"\nTeacher: " +teacherName +"\nSemester: " +semester);
