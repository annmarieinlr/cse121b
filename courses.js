// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section: [
        {sectionNum: 1, 
        roomNum: 'STC 353', 
        enrolled: 26, 
        days: 'TTh', 
        instructor: 'Bro T'},
        
        {sectionNum: 2, 
        roomNum: 'STC 347', 
        enrolled: 28, 
        days: 'TTh', 
        instructor: 'Sis A'}
    ],

    //Activity 2
    enrollStudent: function(sectionNum) {
        let sectionIndex = this.section.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0){
            this.section[sectionIndex].enrolled++;
            outputSections(this.section);
        }
    }, 

    dropStudent: function(sectionNum) {
        let sectionIndex = this.section.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            this.section[sectionIndex].enrolled--;
            outputSections(this.section);
        }
    }
}
  

  //Function to pass in course Name and Number to the HTML
  
  /*Step 1: Assign the variable
    Step 2: Place the content */

  function courseInfo(course) {
    let courseName = document.querySelector("#courseName");
    courseName.textContent = course.name;

    let courseCode = document.querySelector("#courseCode");
    courseCode.textContent = course.code;
  }

  //Function to output the information to the HTML table by sections
  function outputSections(section) {
    let tableContent = section.map((section) => 
    `<tr>
       <td>${section.sectionNum}</td>
       <td>${section.roomNum}</td>
       <td>${section.enrolled}</td>
       <td>${section.days}</td>
       <td>${section.instructor}</td>
    </tr>`);

    document.querySelector("#sections").innerHTML = tableContent.join(" ");
  }

courseInfo(aCourse);
outputSections(aCourse.section);

//Event Listeners for enrolling/dropping students
document.querySelector("#enrollStudent").addEventListener("click", function () {
    let sectionNum = document.querySelector("#sectionNumber").value;    
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function() {
    let sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});
