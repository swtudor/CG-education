'use strict';

// Teachers:

//Declarations
var teacher = {
  name:"Zak VonBolt",
  department: "Engineering",
  ratings:[3.8, 4.0, 3.2],
  addTeacherRating: function(newRating){
    this.ratings.push(newRating);
  },
  getAvgRating: function (){
    var total = 0;
    for(var i = 0; i <this.ratings.length; i++) {
      total += this.ratings[i];
      }
      var avg = (total / this.ratings.length).toFixed(2);
      return avg;
  },
};

/*var confirmRating = function(newRating){
  if(newRating >5.0){
    parseFloat(confirm("Please re-enter a variable that is between 0.0 and 5.0"));
  }else{
    console.log(teacher.ratings);
};
*/
/* Instructions- !!!!! COMMENTED OUT TEMPORARILY!!!!!
console.log(teacher.getAvgRating());

teacher.addTeacherRating (parseFloat(prompt("We would like for you to review you instructor. Please enter a rating between 0.0 - 5.0?")));
//confirmRating(teacher.addTeacherRating);
console.log(teacher.getAvgRating());
alert("Thanks for you review!" +teacher.name +" average rating is now " +teacher.getAvgRating());
console.log("Teacher: " + teacher.name  + "\nDepartment: " + teacher.department + "\nRatings: " + teacher.ratings + "\nAvg. Rating: " +teacher.getAvgRating());
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
/* !!!!Commented out temprorarily!!!!
var userYear = prompt("Please enter the year you will gradutate from college.");
var userMonth= prompt("Will you graduate in May or December?");
var result = findStudentClass (userMonth, userYear);
console.log(result);
*/



//Courses:
// Declarations:
var course1 = {
  name: "Robotics",
  department: "Engineering",
  teacher: "Zak VonBolt",
  semester: "Fall 2017",
};

var course2 = {
  name: "Mammals: Changes Post-Nuclear War",
  department: "Biology",
  teacher: "Pinky PuffPuff",
  semester: "Fall 2017",
};

var course3 = {
  name: "Raining Poodles",
  department: "Meterology",
  teacher: "Zippy Zapoodle",
  semester: "Fall 2017",
};

//var courseName ="Robotics";
//var semester ="Fall 2017";
var allCourses=[
  [course1.name, course1.department],
  [course2.name, course2.department],
  [course3.name, course3.department],
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

//console.log("Course: " + courseName +"\nTeacher: " +teacherName +"\nSemester: " +semester);
