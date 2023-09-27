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

//Activity 4 -- confused on this one. 
let foods = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

function longFoods (food) {
    return foods.filter(foods.length > 6);
}

console.log(longFoods);

//Activity 5
let nums = [12, 34, 21, 54];
let luckNumber = 21;

console.log(nums.indexOf(luckNumber));

