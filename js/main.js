'use strict';

// Teachers:

//Declarations
function Teacher (name, department, ratings){
  this.name=name;
  this.department=department;
  this.ratings = [];
}
Teacher.prototype = {
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
  }
}

var teacherZak = new Teacher("Zak VonBolt", "Engineering", [3.8, 4.0, 3.2]);
var teacherZippy = new Teacher ("Zippy Zapoodle", "Meteorology", [5.0, 4.0, 4.5]);
var teacherPinky = new Teacher ("Pinky PuffPuff", "Mammals: Changes Post-Nuclear War", [3.8, 4.0, 3.2]);

/*var confirmRating = function(newRating){
  if(newRating >5.0){
    parseFloat(confirm("Please re-enter a variable that is between 0.0 and 5.0"));
  }else{
    console.log(teacher.ratings);
};

Instructions- !!!!! COMMENTED OUT TEMPORARILY!!!!!
console.log(teacher.getAvgRating());

teacher.addTeacherRating (parseFloat(prompt("We would like for you to review you instructor. Please enter a rating between 0.0 - 5.0?")));
//confirmRating(teacher.addTeacherRating);
console.log(teacher.getAvgRating());
alert("Thanks for you review!" +teacher.name +" average rating is now " +teacher.getAvgRating());
console.log("Teacher: " + teacher.name  + "\nDepartment: " + teacher.department + "\nRatings: " + teacher.ratings + "\nAvg. Rating: " +teacher.getAvgRating());
*/

// Students:
//Declarations:
function Student (name, major, email, gpa, coursesArray){
  this.name = name;
  this.major = major;
  this.email = email;
  this.gpa = gpa;
  this.courses = [];
}
Student.prototype = {
  addCourse: function (course){
    this.courses.push(course);
  },
  changeMajor: function (newMajor){
    this.major = newMajor;
  },
  dropCourse: function (oldCourse){
    for (var i=0; i<this.courses.length; i++){
      if (oldCourse === this.courses[i]){
        this.courses.pop(oldCourse);
      }
    }
  }
}

var student1 = new Student ("Punkk Y. Gregorson", "Painting", "kinda_jerky@email.edu", 2.8, ["Blast Sculpture", "20th Century Baking Techniques"]);
var student2 = new Student ("Nerdy Gumball", "History", "life_student@email.edu", 4.5, ["Baking & Sociology", "HoverCraft: History"]);
var student3 = new Student ("Geeker McDragonslayer", "Mechanical Engineering", 3.75, ["Artificial Intelligence", "Self-Paving Roads"]);
var date = new Date();
var currentYear = date.getFullYear();
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

/* !!!!Commented out temprorarily!!!!
var userYear = prompt("Please enter the year you will graduate from college.");
var userMonth= prompt("Will you graduate in May or December?");
var result = findStudentClass (userMonth, userYear);
console.log(result);

Adding Course: <course name>
To Student's Courses: <student name>
Now they are taking....
<list course names of all courses the student is taking>

*/
console.log(student1, student2, student3);
student1.dropCourse("Blast Sculpture");
student1.addCourse("Bakers History of the US");
student1.changeMajor("Meteorology");
console.log(student1);

//Courses:
// Declarations:
function Course (name, department, teacher, semester){
  this.name = name;
  this.department = department;
  this.teacher = teacher;
  this.semester = semester;
}
var course1 = new Course ("Robotics", "Engineering", teacherZak.name, "Fall 2017");
var course2 = new Course ("Mammals: Changes Post-Nuclear War", "Biology", teacherPinky.name, "Fall 2017");
var course3 = new Course ("Raining Poodles", "Meteorology", teacherZippy.name, "Fall 2017");

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
/*var departmentToSearch = toUpperCase(prompt("What department would you like to look for classes in?"));

var isValid = false;

while (!isValid){
  isValid = validate (departmentToSearch, allCourses);
  if(isValid){
    allCourses=searchCourses(allCourses, departmentToSearch);
    alert("Courses available for " + departmentToSearch + " are: " + allCourses);
  }else{
    departmentToSearch = toUpperCase(prompt("That department does not exist, please try again!"));
  }
}
*/
//console.log("Course: " + courseName +"\nTeacher: " +teacherName +"\nSemester: " +semester);
