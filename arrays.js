//Activity 1
// const steps = ["one", "two", "three"];
// const stepsHtml = steps.map(step => `<li>${step}</li>`);

// document.getElementById("myList").innerHTML = stepsHtml.join();

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


//Activity 3
let pointTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
})

let gpa = pointTotal / gpaPoints.length;
console.log(gpa);

//Activity 4 
let foods = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

function longFoods () {
    return foods.filter(food => food.length > 6);
}
let food = longFoods();

console.log(food);

//Activity 5
let nums = [12, 34, 21, 54];
let luckNumber = 21;

console.log(nums.indexOf(luckNumber));

