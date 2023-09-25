//Activity 1
let arrayOne = ['one', 'two', 'three'];
let arrayOneHtml = arrayOne.map(function (arr1) {
    return `<li>${arr1}</li>`;
});

document.getElementById("myList").innerHTML = arrayOneHtml.join();

//Activity 2
let grades = ['A', 'B', 'A'];
function gradePoints(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    }
    else if (grade ==='B') {
        points = 3;
    }
    return points;
}

let gpaPoints = grades.map(gradePoints);
console.log(gpaPoints);

//Activity 3
let pointTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
})

let gpa = pointTotal / gpaPoints.length;