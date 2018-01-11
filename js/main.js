'use strict';
//Declarations
//global variables & helper functions:
const sum = (a, b) => a + b;

/*************
     Teachers:
**************/

function Teacher (name, department, ratings, coursesArray, imgsrc){
  this.name = name;
  this.department = department;
  this.ratings = [ratings];
  this.courses = [coursesArray];
  this.img = new Image ();
  this.img.src = imgsrc;
}
Teacher.prototype = {
  addTeacherRating: function(newRating){
    this.ratings.push(newRating);
  },
  ratingsSum: function(){
    //console.log('Teacher.ratingsSum: ' + this.ratings[0].reduce(sum, 0));
    return this.ratings[0].reduce(sum, 0);
  },
  /*getAvgRating: function (){
    let total = 0;
    for(let i = 0; i <this.ratings.length; i++) {
      total += this.ratings[i];
      console.log("Teacher.getAvgRating: " + total);
      }
      let avg = (total / this.ratings.length).toFixed(2);
      return avg;
  },*/
  getAvg: function(){
    let total = this.ratingsSum;
    let len = this.ratings[0].length.toFixed(2);
  //  let avg = (total/this.ratings[0].length).toFixed(2);
    console.log(len);
    console.log(total / len); //should be 11 / 3
    return total / len;
  },
  getCourses: function(coursesArray){
     var coursesTaught = [];
     for (var i=0; i<coursesArray.length; i++){
       if(this.courses===coursesArray[i].name){
         coursesTaught.push(coursesArray[i].name);
       }
     }return coursesTaught;
   },
}

const getAvgRating = function(ratings){
    var total = 0;
    for(var i = 0; i <ratings.length; i++) {
      total += ratings[i];
      console.log("this is the total" + total);
      }
      var avg = (total / ratings.length).toFixed(2);
      return avg;
}

//const arr = [0, 3, 7, 90, 6];
var teacherZak = new Teacher("Zak VonBolt", "Engineering", [3.8, 4.0, 3.2], ['MATH 1800', 'ENGR 1010'], "./images/zak.jpg");
var teacher2 = new Teacher ("Jack English", "Meteorology", [5.0, 4.0, 4.5], ["METEO 101", 'METEO 401'], "./images/zippy.jpg");
var teacher3 = new Teacher ("Martha Blick", "History", [3.8, 4.0, 3.2], ['Modern History', 'HIST:601'], "./images/pinky-puffpuff.jpg");
var teacher4 = new Teacher ("Jane Reed", "History", [4.7, 3.5, 4.0], ['20th Cent. Russia', 'Hist 101'], "./images/prof-cupcake.jpg");
var teacher5 = new Teacher ("Steve Botts", "Computer Science", [5.0, 5.0, 5.0], ['Algorithms', 'Robotics 301'], "./images/beep.jpg");
var allTeachers=[teacherZak, teacher2, teacher3, teacher4, teacher5];


//console.log('getAvgRating function w/Teacher obj.ratings passed: ' + getAvgRating(teacherZak.ratings));
console.log('teacher.ratingsSum: ' + teacherZak.ratingsSum());
console.log('teacher.getAvg: ' + teacherZak.getAvg());
//console.log(teacherZak.addTeacherRating(4.0));

function updateTeacherDisplay (teachersArray){
  $('#teacherContainer').empty();
  for (var i=0; i<teachersArray.length; i++){
      $('#teacherContainer').append(
      `<div class="teacher-box">
        <box class="teacher-name">
          <img class="profile-pic" src="` + teachersArray[i].img.src + `" alt='profile picture'/>
          <div class="name">
              <h2>` + teachersArray[i].name + `</h2>
              <h3>` + teachersArray[i].department + `</h3>
          </div>
        </box>

        <box class="bottom-box">
          <box class="teacher-courses">
            <h3> Courses </h3>
            <p>` + teachersArray[i].courses[0][0] + `<br>
                ` + teachersArray[i].courses[0][1] + `</p>
          </box>

          <box class="teacher-rating">
            <h3>Rating</h3>
            <p>`+teachersArray[i].getAvg()+` / 5.0</p>
          </box>
        </box>
      </div>`
    );
  };
}

function updateTeacherPanel (teachObj){
  $('#teacherInfo').empty();
  $('#teacherInfo').append(
      `<h3>Name: `+ teachObj.name`</h3>
      <h3>Department: ` + teachObj.department`</h3>
      <h3>Current Rating: `+`</h3>`
  );
}



/******************
      Students:
******************/
function Student (name, major, email, gpa, coursesArray){
  this.name = name;
  this.major = major;
  this.email = email;
  this.gpa = gpa;
  this.courses = [coursesArray];
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

//student object (name, major, email, gpa, courseArray)
var student1 = new Student ("Daniel McGregor", "Painting", "email@school.edu", 3.5, ["3D Desgin", "20th Cent Art"]);
var student2 = new Student ("Grace Regale", "History", "email@school.edu", 4.0, ["Magic in the Middle Ages", "Modern History"]);
var student3 = new Student ("Owen James", "Mechanical Engineering", 'email@school.edu', 3.75, ["Artificial Intelligence", "Painting 101"]);
const student4 = new Student ("Iris Edwards", "Engineering", 'email@school.edu', 3.8, ['Geology', 'Civil Engineering']);
const student5 = new Student ('Elsie Parks', 'Dance', 'email@chool.edu', 3.0, ['Modern Dance', 'Ballet:301']);
const student6 = new Student ('Elliot Majors', 'Meteorology', 'email@school.edu', 3.5, ['Meteo:201', '3D Design']);

/***************
    Courses:
****************/
function Course (name, department, teacher, semester){
  this.name = name;
  this.department = department;
  this.teacher = teacher;
  this.semester = semester;
}

var course1 = new Course ("Robotics", "Engineering", teacherZak.name, "Fall 2017");
var course2 = new Course ("20th Cent. Russia", "History", teacher2.name, "Fall 2017");
var course3 = new Course ("METEO 101", "Meteorology", teacher3.name, "Fall 2017");
var course4 = new Course ("ENGR 101", "Engineering", teacherZak.name, "Fall 2017");
var course5 = new Course ("Modern Hist", "History", teacher2.name, "Spring 2018");
var course6 = new Course ("Film and Culture: 1934-1970", "History", teacher4.name, "Spring 2018");
var course7 = new Course ("Civil ENGR 301", "Engineering", teacher5.name, "Fall 2017 & Spring 2018");
var course8 = new Course ("METEO 400", "Meteorology", teacher3.name, "Spring 2018");
var course9 = new Course ("HIST 201", "History", teacher4.name, "Spring 2018");
var course10= new Course ("METEO 302", "Meteorology", teacher5.name, "Spring 2018")

var allCourses=[course1, course2, course3, course4, course5, course6, course7, course8, course9, course10];
var allDepartments=["Engineering", "Meteorology", "History"];
var activeSemesters=["Spring 2018", "Fall 2017"];

function validate (departmentSearched,coursesArray){
  for (var i=0; i<coursesArray.length;i++){
    if (coursesArray[i].department === departmentSearched){
      return true;
    }
  }
  return false;
}

function updateCourseDisplay (coursesArray){
  $('.course-container').empty();
  for (var i=0; i<coursesArray.length; i++){
      $('.course-container').append(
      `<div class="course-box">
        <box class="course-left">
          <h2>`+ coursesArray[i].name +`</h2>
          <h3>`+ coursesArray[i].department +`</h3>
        </box>
        <box class="course-right">
          <p><em>Teacher: </em> `+ coursesArray[i].teacher +`</p>
          <p><em>Semester: </em> `+coursesArray[i].semester+`</p>
        </box>
      </div>`);
  };
}

function searchCourses (coursesArray, departmentSearched){
  var newArray=[];
  for (var i=0; i<coursesArray.length;i++){
      if (coursesArray[i].department === departmentSearched){
        newArray.push(coursesArray[i].name);
        console.log(newArray);
      }else{
        console.log("FAIL");
      }
  } return newArray;
}

function filter(array, val){
  var newArray=[];
  for(var i=0; i<array.length; i++){
    for (var course in array[i]){
      if(array[i].hasOwnProperty(course)){
        if(val===array[i][course]){
          newArray.push(array[i]);
        }
      }
    }
  }
  return newArray;
};

/**********
  Instructions-
  **********/
$(document).ready(function(){
    updateCourseDisplay(allCourses);
    updateTeacherDisplay(allTeachers);

    // search filters/dropdowns on Courses page :
    $('.dropbtn').on('click', function(){
      $(this).closest('.dropdown').find('.dropdown-content').toggleClass('show');
    });
    $('.dropdownItem').on('click', function(){
      var value = $(this).attr('data-dropdown'); //need to grab ID to create match for departmentSearched argument
      updateCourseDisplay(filter(allCourses, value));
      $(this).closest('.dropdown').find('.dropdown-content').toggleClass('show');
    });
    $('#clear').on('click', function(){
      updateCourseDisplay(allCourses);
    });

    //slide panel on Teachers page
    $('.teacher-box').on('click', function(){
      $("#teacherPanel").closest('.slideContainer').slideDown('show');
      //call updateTeacherPanel here (update it with $(this))
    })
    $('#xOut').on('click',function(){
      $("#teacherPanel").closest('.slideContainer').slideUp('show');
    })
    $('#submit').on('click', function(){
      $("#teacherPanel").closest('.slideContainer').slideUp('show');
    })

});
