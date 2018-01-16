'use strict';
/************
Declarations
************/

//global variables & helper functions:
const sum = (a, b) => a + b;

/*****************
Teacher page- variables & constructors:
*****************/
function Teacher (name, department, ratings, coursesArray, imgsrc){
  this.name = name;
  this.department = department;
  this.ratings = ratings;
  this.courses = [coursesArray];
  this.img = new Image ();
  this.img.src = imgsrc;
}
Teacher.prototype = {
  addRating: function(newRating){
    this.ratings.push(newRating);
  },
  getAvg: function(){
     let avg = this.ratings.reduce(sum, 0) / this.ratings.length;
     return (avg).toFixed(2);
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
// teacher object map(name, department, ratings, coursesArray, imgsrc)
var teacherZak = new Teacher("Zak Masters", "Engineering", [3.8, 4.0, 3.2], ['MATH 1800', 'ENGR 1010'], "https://upload.wikimedia.org/wikipedia/commons/7/7e/Red_Skelton_1960_rebalance.jpg");
var teacher2 = new Teacher ("Jack English", "Meteorology", [5.0, 4.0, 4.5], ["METEO 101", 'METEO 401'], "https://upload.wikimedia.org/wikipedia/commons/2/27/Grant%2C_Cary_%28Suspicion%29_01_Crisco_edit.jpg");
var teacher3 = new Teacher ("Martha Blick", "History", [3.8, 4.0, 3.2], ['Modern History', 'HIST:601'], "https://upload.wikimedia.org/wikipedia/commons/2/26/Gloria_Stuart_ca._1930s_Twentieth_Century_Fox_headshot.png");
var teacher4 = new Teacher ("Jane Reed", "History", [4.7, 3.5, 4.0], ['20th Cent. Russia', 'Hist 101'], "https://upload.wikimedia.org/wikipedia/commons/8/8f/Olivia_de_Havilland_Publicity_Photo_1952.jpg");
var teacher5 = new Teacher ("Steve Botts", "Computer Science", [5.0, 5.0, 5.0], ['Algorithms', 'Robotics 301'], "https://upload.wikimedia.org/wikipedia/commons/a/a4/James_cagney_promo_photo.jpg");

var allTeachers=[teacherZak, teacher2, teacher3, teacher4, teacher5];

/******************
Student Page variables & constructors:
******************/
function Student (name, major, email, gpa, coursesArray, imgsrc){
  this.name = name;
  this.major = major;
  this.email = email;
  this.gpa = gpa;
  this.courses = [coursesArray];
  this.img = new Image ();
  this.img.src = imgsrc;
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

//student object map (name, major, email, gpa, courseArray, imgsrc)
var student1 = new Student ("Daniel McGregor", "Painting", "email@school.edu", 3.5, ["3D Desgin", "20th Cent Art"], 'https://upload.wikimedia.org/wikipedia/commons/3/30/Ian-clarke-headshot-1.jpg');
var student2 = new Student ("Grace Regale", "History", "email@school.edu", 4.0, ["Magic in the Middle Ages", "Modern History"], 'https://upload.wikimedia.org/wikipedia/commons/5/51/Auset_Maat_Kheru.jpg');
var student3 = new Student ("Owen James", "Mechanical Engineering", 'email@school.edu', 3.75, ["Artificial Intelligence", "Painting 101"], 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Ryan_Driller_2016.jpg');
const student4 = new Student ("Iris Edwards", "Engineering", 'email@school.edu', 3.8, ['Geology', 'Civil Engineering'], 'https://upload.wikimedia.org/wikipedia/commons/6/6a/12_01_2016_Alice_headshot.jpg');
const student5 = new Student ('Elsie Parks', 'Dance', 'email@chool.edu', 3.0, ['Modern Dance', 'Ballet:301'], 'https://upload.wikimedia.org/wikipedia/commons/9/93/Chloe_Salmon.jpg');
const student6 = new Student ('Elliot Majors', 'Meteorology', 'email@school.edu', 3.5, ['Meteo:201', '3D Design'], 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Headshot_2014_2014-02-25_11-45.jpg');

const allStudents = [student1, student2, student3, student4, student5, student6];
/***************
Courses Page variables & constructors
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

/****************
Global functions:
*****************/
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

/***************
Teacher Page Functions:
****************/
function updateTeacherDisplay (teachersArray){
  $('#teacherContainer').empty();
  for (var i=0; i<teachersArray.length; i++){
      $('#teacherContainer').append(
      `<div class="teacher-box"
          data-teacherName= "` + teachersArray[i].name + `"
          data-teacherDept= '` + teachersArray[i].department + `'
          data-teacherAvg= '`+ teachersArray[i].getAvg() +`'>

        <box class="teacher-name">
          <img class="profile-pic" src="` + teachersArray[i].img.src + `" alt='profile picture'/>
          <div class="name">
              <h2> ` + teachersArray[i].name + `</h2>
              <h3> ` + teachersArray[i].department + `</h3>
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
            <p> `+teachersArray[i].getAvg()+` / 5.0</p>
          </box>
        </box>
      </div>`
    );
  };
}

function updateTeacherPanel (name, dept, avg){
  $('#teacherInfo').empty();

  $('#teacherInfo').append(
      `<h3>Name: `+ name +`</h3>
      <h3>Department: ` + dept +`</h3>
      <h3>Current Rating: `+ avg +`</h3>`
  );
}

/*************
Student Page functions
*************/

//student object map (name, major, email, gpa, courseArray, imgsrc)
function updateStudentDisplay (studentArray){
  $('#studentContainer').empty();
  for (var i=0; i<studentArray.length; i++){
    $('#studentContainer').append(
      `<div class="student-profile">
        <box class="student-name">
          <img class="profile-pic" src="`+ studentArray[i].img.src +`" alt="profile picture"/>
          <h2> ` + studentArray[i].name +`</h2>
          <h3>`+studentArray[i].major +`</h3>
        </box>
        <box class="bottom-box-student">

            <div><p><span class= 'h3Faker'>Email: </span>  `+ studentArray[i].email +`</p></div>
            <div><p><span class='h3Faker'>GPA: </span>  `+ studentArray[i].gpa +`</p></div>
            <div><p><span class= 'h3Faker'>Courses: </span>  `+ studentArray[i].courses[0][0] +`, &ensp;`+ studentArray[i].courses[0][1]+`</p></div>
        </box>
      </div>`
    );
  };
}


/************
Course Page Functions:
*************/

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


/***************
  Instructions-
***************/
$(document).ready(function(){
    updateCourseDisplay(allCourses);
    updateTeacherDisplay(allTeachers);
    updateStudentDisplay(allStudents);

    // search filters/dropdowns on Courses page :
    $('.dropbtn').on('click', function(){
      $(this).closest('.dropdown').find('.dropdown-content').toggleClass('show');
    });

    $('.dropdownItem').on('click', function(){
      var value = $(this).attr('data-dropdown');
      updateCourseDisplay(filter(allCourses, value));
      $(this).closest('.dropdown').find('.dropdown-content').toggleClass('show');
    });

    $('#clear').on('click', function(){
      updateCourseDisplay(allCourses);
    });

    //slide panel on Teachers page
    $('.teacher-box').on('click', function(){
      //call updateTeacherPanel here (update it with data-attr & $(this))

      //currently not grabbing the correct data-attr!!
      var name = $(this).attr('data-teacherName');
      var dept = $(this).attr('data-teacherDept');
      var avg = $(this).attr('data-teacherAvg');
      console.log($(this));
      console.log(name, dept, avg);

      updateTeacherPanel(name, dept, avg);

    $("#teacherPanel").closest('.slideContainer').slideDown('show');
    })

    $('#xOut').on('click',function(){
      $("#teacherPanel").closest('.slideContainer').slideUp('show');
    })

    $('#submit').on('click', function(){
      $("#teacherPanel").closest('.slideContainer').slideUp('show');
      //update teacher.ratings
    })

});
