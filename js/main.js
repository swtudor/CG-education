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
//Declarations:
var studentName = "Punkk Y. Gregorson";
var major ="Painting";
var gpa =2.8;
var date = new Date();
var currentYear = date.getFullYear();
console.log(currentYear);

var welcomeCollegeStudent = function(studentClass){alert("Welcome " + studentClass +"!");};

var welcomeHsStudent = function(studentClass){alert("You're still a " +studentClass +" in highschool!")};

var gradDate = function(month, year){return month + " " +year;};

var findStudentClass = function (month, year){
  year= parseInt(year);
  var gradClass = "This function is not working. FIX YOUR CODE!";
  if (month==="May"){
    if (year === currentYear +1 && year <= currentYear +4){
      if (year === currentYear +1){
        gradClass= "Senior";
      }else if (year === currentYear +2){
        gradClass= "Junior";
      }else if (year === currentYear +3){
        gradClass = "Sophmore";
      }else if (year ===currentYear +4){
        gradClass = "Freshman";
      } alert(welcomeCollegeStudent(gradClass));
    }else if (year >= currentYear+5 && year <=currentYear+8){
      if (year === currentYear +5){
        gradClass= "Highschool Senior";
      }else if (year === currentYear +6){
        gradClass= "Highschool Junior";
      }else if (year === currentYear +7){
        gradClass= "Highschool Sophmore";
      }else if (year === currentYear +8){
        gradClass= "Highschool Freshman";
      } alert(welcomeHsStudent(gradClass));
    }
  }else if (month === "December"){
      if (year === currentYear  && year <= currentYear +3){
        if (year === currentYear){
          gradClass= "Senior";
        }else if (year === currentYear +1){
          gradClass= "Junior";
        }else if (year === currentYear +2){
          gradClass = "Sophmore";
        }else if (year ===currentYear +3){
          gradClass = "Freshman";
        }alert(welcomeCollegeStudent(gradClass));
      }else if (year >= currentYear+4 && year <=currentYear+7){
        if (year === currentYear +4){
          gradClass= "Highschool Senior";
        }else if (year === currentYear +5){
          gradClass= "Highschool Junior";
        }else if (year === currentYear +6){
          gradClass= "Highschool Sophmore";
        }else if (year === currentYear +7){
          gradClass= "Highschool Freshman";
        }alert(welcomeHsStudent(gradClass));
      }
    }else if (year >= currentYear +9){
      gradClass= alert("Whoa, hold up! College is still some years away!");
    }return gradClass;
};


//Students Page -Instructions:
console.log("Name: " +studentName + "\nMajor: " +major +"\nG.P.A: " +gpa);
var userYear = prompt("Please enter the year you will gradutate from college.");
var userMonth= prompt("Will you graduate in May or December?");

var result = findStudentClass (userMonth, userYear);
console.log(result);




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
/*var departmentToSearch = prompt("What department would you like to look for classes in?");

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
*/
console.log("Course: " + courseName +"\nTeacher: " +teacherName +"\nSemester: " +semester);
