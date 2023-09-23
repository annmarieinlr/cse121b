/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Annmarie SanSevero";
let currentYear = new Date().getFullYear();
let profilePicture = 'images/headshot.jpg'

/* Step 3 - Element Variables */

let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('year');
profilePicture = document.querySelector("img").src = profilePicture;
document.querySelector("img").setAttribute("alt", "Annmarie SanSevero");





/* Step 4 - Adding Content */


nameElement.innerHTML = `<strong>${fullName}</strong>`;


/* Step 5 - Array */

let favoriteFoods = ['pasta', 'salad', 'shrimp'];
foodElement.textContent = favoriteFoods.join(', ');
let newFav = 'spinach';
favoriteFoods.push(newFav);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods = favoriteFoods.slice(1,);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;





